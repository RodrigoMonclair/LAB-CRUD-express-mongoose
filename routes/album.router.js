import express from "express";
import AlbumModel from "../models/album.model.js";

const albumRoute = express.Router();

albumRoute.post("/create-album", async (req, res) => {
  try {
    const newAlbum = await AlbumModel.create(req.body);
    return res.status(200).json(newAlbum);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Algo errado no cadastro do album" });
  }
});

albumRoute.get("/albums", async (req, res) => {
  try {
    const allAlbums = await AlbumModel.find({});

    return res.status(200).json(allAlbums);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ msg: "Nâo foi possível realizar a consulta" });
  }
});

albumRoute.get("/albums/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    const album = await AlbumModel.findById(albumId);

    return res.status(200).json(album);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ msg: "Nâo foi possível realizar a consulta" });
  }
});

albumRoute.put("/albums/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    const updateAlbum = await AlbumModel.findByIdAndUpdate(
      albumId,
      { ...req.body },
      { new: true, runValidators: true }
    );

    return res.status(201).json(updateAlbum);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ msg: "Nâo foi possível editar o Album" });
  }
});

albumRoute.delete("/albums/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    const deletedAlbum = await AlbumModel.findByIdAndDelete(albumId);

    return res.status(204).json();
  } catch (error) {
    console.log(error);
    return res.status(204).json({ msg: "Nâo foi possível deletar o Album" });
  }
});

export default albumRoute;
