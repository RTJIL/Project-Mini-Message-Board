import db from "../models/queries.js"

const getAllMessages = async (req, res) => {
  const messagess = await db.getAllMessages();
  console.log("Present messages", messagess)

  res.render("index", { messages: messagess })
}

const getMessageById = async (req, res) => {
  const { messageId } = req.params
  console.log(messageId)

  const message = await db.getMessageById(messageId)

  if (!message) {
    return res.status(404).send("Message not found")
  }

  res.render("message", { message })
}

const getForm = (req, res) => {
  res.render("form")
}

const addMessage = async (req, res) => {
  const message = req.body
  console.log(message)

  await db.addMessage(message)

  res.redirect("/")
}

export default {
  getMessageById,
  getForm,
  getAllMessages,
  addMessage
}
