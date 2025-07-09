import { Router } from "express"
import indexController from "../controllers/indexController.js"

export const indexRouter = Router()

indexRouter.get("", indexController.getAllMessages)

indexRouter.get("/new", indexController.getForm)
indexRouter.post("/new", indexController.addMessage)

indexRouter.get("/:messageId", indexController.getMessageById)
