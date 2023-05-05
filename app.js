import express from 'express'

import dotenv from 'dotenv'

import connectDB from './config/dbConnect.js'

// Import Routes
import userRoute from './routes/userRoute.js'

dotenv.config()
connectDB()

const app = express()

// Body parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/users', require('./routes/userRoute'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))
