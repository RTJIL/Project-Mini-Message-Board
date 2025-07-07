import { messages } from "../data/data.js"

export const getAllMessages = (req, res) => {
  res.render("index", { messages: messages })
}
