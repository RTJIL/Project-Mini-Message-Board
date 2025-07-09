import express from "express"
import path from "node:path"
import { indexRouter } from "./routes/indexRoute.js"

const app = express()

export const __dirname = import.meta.dirname

const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))

app.use(express.urlencoded({ extended: true }))

app.set("views", [path.join(__dirname, "views")])
app.set("view engine", "ejs")

app.use("/", indexRouter)

const PORT = 8000
app.listen(PORT, () => {
  console.log("Server started on port: ", PORT)
})
