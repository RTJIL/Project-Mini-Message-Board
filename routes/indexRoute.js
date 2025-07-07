import { Router } from "express"
import { getAllMessages } from "../controllers/getAllMessages.js"
import { getForm } from "../controllers/getForm.js"
import { addMessage } from "../controllers/addMessage.js"

export const indexRouter = Router()

indexRouter.get("", getAllMessages)
indexRouter.get("/new", getForm)
indexRouter.post("/new", addMessage)
// indexRouter.get(":id", getMessageById)
