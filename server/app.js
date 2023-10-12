import express  from "express"
import  dotenv  from "dotenv"
import connectDB from "./config/db.js"
dotenv.config();
const app=express()
import cookieParser from "cookie-parser"

app.use(cookieParser())


import morgan from "morgan"
app.use(morgan("tiny"))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

import userRoutes from "./routes/userRoutes.js"

app.use("/user",userRoutes);


export default app;