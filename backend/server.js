import express from 'express';
import cors from 'cors';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const { Pool } = pg;

// We allow starting without DB to not break the build if env is missing
let pool = null;
if (process.env.POSTGRES_URL) {
  pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  console.warn("POSTGRES_URL is missing. Backend will run in mock mode.");
}

// In-memory fallback if no DB
let mockVotes = { yes: 854, no: 54 };

// Initialize Database Table
async function initDB() {
  if (!pool) return;
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS votes (
        id SERIAL PRIMARY KEY,
        yes_votes INTEGER DEFAULT 854,
        no_votes INTEGER DEFAULT 54
      );
    `);
    
    // Insert initial row if empty
    const result = await pool.query('SELECT * FROM votes WHERE id = 1');
    if (result.rows.length === 0) {
      await pool.query('INSERT INTO votes (id, yes_votes, no_votes) VALUES (1, 854, 54)');
    }
    console.log("Database initialized successfully.");
  } catch (err) {
    console.error("Error initializing DB:", err);
  }
}

initDB();

app.get('/api/votes', async (req, res) => {
  if (pool) {
    try {
      const result = await pool.query('SELECT yes_votes, no_votes FROM votes WHERE id = 1');
      if (result.rows.length > 0) {
        return res.json({ yes: result.rows[0].yes_votes, no: result.rows[0].no_votes });
      }
    } catch (err) {
      console.error(err);
    }
  }
  // Fallback
  res.json({ yes: mockVotes.yes, no: mockVotes.no });
});

app.post('/api/votes', async (req, res) => {
  const { answer } = req.body;
  const isYes = answer === true;
  
  if (pool) {
    try {
      if (isYes) {
        await pool.query('UPDATE votes SET yes_votes = yes_votes + 1 WHERE id = 1');
      } else {
        await pool.query('UPDATE votes SET no_votes = no_votes + 1 WHERE id = 1');
      }
      
      const result = await pool.query('SELECT yes_votes, no_votes FROM votes WHERE id = 1');
      return res.json({ yes: result.rows[0].yes_votes, no: result.rows[0].no_votes });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
  } else {
    // Fallback
    if (isYes) mockVotes.yes += 1;
    else mockVotes.no += 1;
    res.json({ yes: mockVotes.yes, no: mockVotes.no });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
