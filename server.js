import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import pkg from 'pg';
import pool from './db/db.js';

const { Client } = pkg; // Destructuring Client from the default export

dotenv.config(); // Initiliasing dotenv

const app = express();
const port = process.env.PORT || 5001;


// Middleware
app.use(cors()); // Enable Cross-Origin Requests
app.use(express.json()); // Parse incoming JSON requests

// Test route
app.get('/', (req, res) => {
    res.send('Welcome to Projectiva2 Backend App with PostgreSQL!');
});

// PostgreSQL client setup
const client = new Client({
    connectionString: process.env.DATABASE_URL,    // To be set in the .env file
});

client.connect()
    .then(() => console.log("Connected to the database"))
    .catch(err => console.error("Connection error", err.stack));

// Test database connection
app.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.status(200).json({ success: true, timestamp: result.rows[0].now });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: err.message });
    }
});

// Starting the Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
