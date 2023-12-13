import dotenv from "dotenv";
import express from "express";
dotenv.config();
const app = express();

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    restaurant: "McDonalds",
  });
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
