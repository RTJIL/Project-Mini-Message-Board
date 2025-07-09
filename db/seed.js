import { Client } from "pg"
import 'dotenv/config'

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  message VARCHAR ( 255 ),
  username VARCHAR ( 50 ),
  added DATE 
);

INSERT INTO messages (message, username, added) 
VALUES
  ('If you want to shine like sun first you have to burn like it.', 'Adolf Hitler', TO_DATE(CURRENT_DATE,'DD Month YYYY')),
  ('I trust no one, not even myself.', 'Joseph Stalin', CURRENT_DATE),
  ('If you''re going through hell, keep going.', 'Winston Churchill', CURRENT_DATE);
`;

async function main() {
    console.log("sending...")
    const client = new Client({
        connectionString: `postgresql://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:${Number(process.env.PGPORT)}/${process.env.PGDATABASE}`,
    })
    await client.connect()
    await client.query(SQL)
    await client.end()
    console.log("done")
}

main()