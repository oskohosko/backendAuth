import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import { connectDB } from "./lib/db.js"

// Using module so use .js on the end
import authRoutes from "./routes/auth.route.js"

// Setting up app
const app = express()

dotenv.config()
const PORT = process.env.PORT

app.use(express.json())
// Allows us to parse cookies
app.use(cookieParser())

// Endpoints
app.use("/api/auth", authRoutes)

// Setting up the app
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
  connectDB()
})