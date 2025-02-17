import { Pool, QueryResultRow } from "pg";

// Initialize the database connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Ensure this points to your Neon DB connection string
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: true } : false, // Improve SSL config in production
});

// Define a generic query function that returns an array of objects with `QueryResultRow` type
export const query = async <T extends QueryResultRow>(text: string, params?: (string | number)[]): Promise<T[]> => {
  try {
    const res = await pool.query<T>(text, params);
    return res.rows;  // Return the rows from the query result
  } catch (error) {
    console.error("Database query error:", error);
    throw new Error("Database query failed");
  }
};
