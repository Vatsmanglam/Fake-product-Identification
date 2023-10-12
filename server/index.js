import app from "./app.js"
import dotenv from 'dotenv'
dotenv.config({path:'./dot.env'})
const PORT=process.env.PORT||1999
// import {connectDB} from "./config/db.js"

app.listen(PORT,()=>{
    console.log(`listening at port http://localhost:${PORT}`)
})