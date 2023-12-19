import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import db from "./db/index.js";
import cors from "cors";

dotenv.config();
const app = express();

const port = process.env.PORT || 3001;

// Takes information from a request body and attaches it to request object
app.use(cors());
app.use(express.json());

// Get all songs
app.get("/api/v1/songs", async (req, res) => {
  try {
    const results = await db.query("select * from songs");
    res.status(200).json({
      status: "success",
      data: {
        songs: results.rows,
      },
    });
  } catch (err) {
    console.error(err);
  }
});

// Get one song
app.get("/api/v1/songs/:id", async (req, res) => {
  const songId = parseInt(req.params.id);
  console.log(songId);

  try {
    const song = await db.query("SELECT * FROM songs WHERE id = $1", [songId]);
    console.log(song);
    res.status(200).json({
      status: "success",
      data: {
        song: song.rows,
      },
    });
  } catch (err) {}
});

// Create song
app.post("/api/v1/songs", async (req, res) => {
  const { name, lyrics, author, live } = req.body;
  try {
    const song = await db.query(
      "INSERT INTO songs (name, lyrics, author, live) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, lyrics, author, live]
    );
    res.status(201).json({
      status: "success",
      data: {
        song: song.rows[0],
      },
    });
  } catch (err) {
    console.error(err);
  }
});

// Update song
app.put("/api/v1/songs/:id", async (req, res) => {
  const songId = parseInt(req.params.id);
  const { name, lyrics, author, live } = req.body;

  try {
    const song = await db.query(
      "UPDATE songs SET name = $1, lyrics = $2, author = $3, live = $4 WHERE id = $5 returning *",
      [name, lyrics, author, live, songId]
    );
    res.status(201).json({
      status: "success",
      data: {
        song: song.rows[0],
      },
    });
  } catch (err) {}
});

// Delete song
app.delete("/api/v1/songs/:id", async (req, res) => {
  const songId = parseInt(req.params.id);
  try {
    const song = await db.query("DELETE FROM songs WHERE id = $1", [songId]);
    res.status(201).json({
      status: "success",
    });
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
