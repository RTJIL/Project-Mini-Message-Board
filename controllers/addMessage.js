import { messages, saveMessages } from "../data/data.js"
import formatDate from "../utils/formatDate.js"
import { v4 as uuidv4 } from "uuid"

export const addMessage = (req, res) => {
  const { user, message } = req.body

  messages.push({
    id: uuidv4(),
    text: message,
    user,
    added: formatDate(new Date()),
  })

  saveMessages()

  res.redirect("/")
}
