import express from 'express'
import cors from 'cors'
import ProductRoutes from './routes/productRoutes.js'
let app=express()


app.use(cors())
app.use(express.json())
app.use('/api',ProductRoutes)



app.listen(2000,()=>
{
    console.log("Connected to PORT 2000")
})