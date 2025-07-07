import { messages } from "../data/data.js"
import fs from "node:fs/promises"

export const getMessageById = async (req, res) => {
  const { messageId } = req.params

  const message = messages.find((msg) => msg.id === messageId)

  if (!message) {
    return res.status(404).send("Message not found")
  }

  res.render("message", { message })
}
