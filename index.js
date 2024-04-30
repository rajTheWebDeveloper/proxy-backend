import express from 'express'
import cors from 'cors'
import env from 'dotenv'
import ProductRoutes from './routes/productRoutes.js'
let app=express()

env.config({
  path: "./config/.env",
});

app.use(cors())
app.use(express.json())
app.use('/api',ProductRoutes)




app.listen(process.env.PORT,()=>
{
    console.log(`Connected to PORT ${process.env.PORT}`)
})