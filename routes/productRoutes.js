import express from 'express'
import { products } from '../controllers/products.js'
import singleProduct from '../controllers/singleProduct.js'

let router=express.Router()


router.get('/getproducts',products)
router.get('/getsingle',singleProduct)

export default router