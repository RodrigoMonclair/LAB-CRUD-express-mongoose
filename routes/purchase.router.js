import express from "express";
import PurchaseModel from "../models/purchase.model.js";
import AlbumModel from "../models/album.model.js";

const purchaseRoute = express.Router();

purchaseRoute.post("/purchase/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    const newPurchase = await PurchaseModel.create({...req.body, album: albumId,});
    return res.status(201).json(newPurchase);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.errors);
  }
});

purchaseRoute.get("/purchase/:purchaseId", async (req, res)=>{
    try {
        const { purchaseId } = req.params;
    const purchase = await PurchaseModel.findById(purchaseId).populate('album')
    return res.status(200).json(purchase)
    } catch (error) {
        console.log(error);
    return res.status(400).json(error.errors);
    }
    
    
})

export default purchaseRoute;
