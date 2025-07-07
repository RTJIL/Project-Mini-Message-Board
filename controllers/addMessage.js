import { messages } from "../data/data.js"
import formatDate from "../utils/formatDate.js"

export const addMessage = (req, res) => {
  const { user, message } = req.body

  messages.push({ text: message, user: user, added: formatDate(new Date()) })
  res.redirect("/")
}
