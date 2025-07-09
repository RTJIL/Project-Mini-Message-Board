import { pool } from "../db/db.js";

async function getAllMessages() {
    const query = `
    SELECT 
      id,
      message,
      username,
      TO_CHAR(added, 'DD FMMonth YYYY') AS added
    FROM messages;
  `;

    const { rows } = await pool.query(query)
    return rows
}

async function getMessageById(messageId) {
    const query = `
    SELECT id,
      message,
      username,
      TO_CHAR(added, 'DD FMMonth YYYY') AS added
    FROM messages
    WHERE id = $1;
    `

    const { rows } = await pool.query(query, [messageId])
    return rows[0]
}

async function addMessage(message) {
    const query = `
    INSERT INTO messages (message, username, added)
    VALUES
      ($1, $2, CURRENT_DATE)
    `

    const values = [message.message, message.username]

    await pool.query(query, values)
}

export default {
    getAllMessages,
    getMessageById,
    addMessage
}