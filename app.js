import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/dbConnect.js";

// Import Routes
import userRoute from "./routes/userRoute.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());

// Body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/users", userRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
