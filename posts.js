import express from "express";

const fs = require("fs").promises;
const path = require("path");

const router = express.Router();

const dbFilePath = path.resolve(__dirname, "./db.json");

router.get("/", async (req, res) => {
  try {
    const data = await fs.readFile(dbFilePath, "utf8");
    const jsonData = JSON.parse(data);

    res.status(200).json(jsonData.posts);
  } catch (error) {
    res.status(500).json({ error: "Ошибка при загрузке данных" });
  }
});

module.exports = router;
