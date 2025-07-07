import fs from "node:fs/promises"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const messagesPath = path.join(__dirname, "messages.json")

export let messages = []

try {
  const file = await fs.readFile(messagesPath, "utf-8")
  messages = JSON.parse(file)
} catch (err) {
  console.error("Error reading messages.json:", err)
  messages = []
}

export async function saveMessages() {
  await fs.writeFile(messagesPath, JSON.stringify(messages, null, 2), "utf-8")
}
