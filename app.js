import express from "express"
import path from "node:path"
import fs from "node:fs/promises"

const app = express()

const PORT = 8000
app.listen(PORT, () => {
  console.log("Server started on port: ", PORT)
})
