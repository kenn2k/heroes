import express from "express";
import { superheroRoutes } from "./routes/superhero.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use("/superhero", superheroRoutes);

app.get("/", (req, res) => {
  res.send(process.env.DATABASE_URL);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
