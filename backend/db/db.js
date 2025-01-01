import pkg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pkg;

dotenv.config(); // Loading environment variables from .env file

// Creating a new pool instance
const pool = new Pool({
    user: process.env.DB_USER, // Username
    host: process.env.DB_HOST, // e.g., localhost
    database: process.env.DB_NAME, // database name
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT, // 5432
});

export default pool;