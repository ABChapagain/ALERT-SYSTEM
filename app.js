import express from 'express'

import dotenv from 'dotenv'

import connectDB from './config/dbConnect.js'

dotenv.config()
connectDB()

const app = express()

// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))
