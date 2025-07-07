import { Router } from "express"
import { getAllMessages } from "../controllers/getAllMessages.js"
import { getForm } from "../controllers/getForm.js"
import { addMessage } from "../controllers/addMessage.js"
import { getMessageById } from "../controllers/getMessageById.js"

export const indexRouter = Router()

indexRouter.get("", getAllMessages)

indexRouter.get("/new", getForm)
indexRouter.post("/new", addMessage)

indexRouter.get("/:messageId", getMessageById)
