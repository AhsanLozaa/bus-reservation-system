// controllers/place.controller.js
import models from "../models/index.js";
const { Place } = models;

export const createPlace = async (req, res) => {
  try {
    const { name } = req.body;
    const newPlace = await Place.create({ name });
    return res.status(201).json(newPlace);
  } catch (error) {
    console.error("Create place error:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getAllPlaces = async (req, res) => {
  try {
    const places = await Place.findAll();
    return res.status(200).json(places);
  } catch (error) {
    console.error("Get all places error:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
