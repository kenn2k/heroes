import { Router } from "express";
import formidableMiddleware from "express-formidable";
import { prisma } from "../prisma.js";
import cloudinary from "../config/cloudinary.js";

export const superheroRoutes = new Router();

superheroRoutes.use(formidableMiddleware());

superheroRoutes.get("/", async (req, res) => {
  try {
    const superheroes = await prisma.superhero.findMany();
    res.json(superheroes);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error creating superhero", message: error.message });
  }
});

superheroRoutes.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const hero = await prisma.superhero.findUnique({
      where: { id: Number(id) },
    });

    if (!hero) {
      return res.status(404).json({ message: "Hero not found" });
    }

    return res.json(hero);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Internal Server Error" }, error.message);
  }
});

superheroRoutes.post("/upload", async (req, res) => {
  const { fields, files } = req;

  try {
    const result = await cloudinary.uploader.upload(files.images.path, {
      folder: "superheroes",
    });

    const superhero = await prisma.superhero.create({
      data: {
        nickname: fields.nickname,
        realName: fields.realName,
        originDescription: fields.originDescription,
        superpowers: fields.superpowers,
        catchPhrase: fields.catchPhrase,
        images: result.secure_url,
      },
    });

    res.json(superhero);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error creating superhero", message: error.message });
  }
});

superheroRoutes.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { fields, files } = req;

  try {
    let updatedData = {
      nickname: fields.nickname,
      realName: fields.realName,
      originDescription: fields.originDescription,
      superpowers: fields.superpowers,
      catchPhrase: fields.catchPhrase,
    };

    if (files?.images?.path) {
      const result = await cloudinary.uploader.upload(files.images.path, {
        folder: "superheroes",
      });

      updatedData.images = result.secure_url;
    }

    const updatedSuperhero = await prisma.superhero.update({
      where: { id: Number(id) },
      data: updatedData,
    });

    res.json(updatedSuperhero);
  } catch (error) {
    res.status(500).json({
      error: "Error updating superhero",
      message: error.message,
    });
  }
});

superheroRoutes.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.superhero.delete({
      where: { id: Number(id) },
    });

    res.json({ message: "Superhero deleted successfully" });
  } catch (error) {
    res.status(500).json({
      error: "Error deleting superhero",
      message: error.message,
    });
  }
});
