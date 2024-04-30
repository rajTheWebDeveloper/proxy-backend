import express from "express";
import axios from "axios";

let singleProduct = async (req, res, next) => {
    let {id}=req.query
     console.log(req.query.id);
  let foundData = await axios.get(
    "https://www.course-api.com/react-store-single-product?id=" + id
  );
  return res.status(200).json({
    data: foundData.data,
  });
};

export default singleProduct;
