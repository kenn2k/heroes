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
  console.log("Fields:", fields);
  console.log("Files:", files);
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
