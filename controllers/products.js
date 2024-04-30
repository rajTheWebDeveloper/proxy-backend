import express from 'express'
import axios from 'axios'


let products=async (req,res,next)=>
{
    let foundData=await axios.get('https://www.course-api.com/react-store-products')
    return res.status(200).json({
      data: foundData.data,
    });
}

export {products}