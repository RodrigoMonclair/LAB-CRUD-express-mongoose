import express from 'express'
import AlbumModel from '../models/album.model.js'

const albumRoute = express.Router()

albumRoute.post("/create-album", async (req, res)=>{
    try {
        const newAlbum = await AlbumModel.create(req.body)
        return res.status(200).json(newAlbum)
    } catch (error) {
        console.log(error)
    return res.status(400).json({msg: "Algo errado no cadastro do album"})
    }
})

export default albumRoute