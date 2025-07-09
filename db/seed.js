import { Client } from "pg"
import 'dotenv/config'

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message VARCHAR(255),
  username VARCHAR(50),
  added DATE
);

INSERT INTO messages (message, username, added) 
VALUES
  ('If you want to shine like sun first you have to burn like it.', 'Adolf Hitler', CURRENT_DATE),
  ('I trust no one, not even myself.', 'Joseph Stalin', CURRENT_DATE),
  ('If you''re going through hell, keep going.', 'Winston Churchill', CURRENT_DATE);
`;

async function main() {
  const client = new Client({
    connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${Number(process.env.PGPORT)}/${process.env.PGDATABASE}`,
    ssl: { rejectUnauthorized: false }, 
  });

  try {
    console.log("🚀 Connecting to DB...");
    await client.connect();

    console.log("📦 Running seed...");
    await client.query(SQL);

    console.log("✅ Seed complete!");
  } catch (err) {
    console.error("❌ Error seeding:", err.message);
    process.exit(1);
  } finally {
    await client.end();
    console.log("🧹 DB connection closed.");
  }
}

main();
