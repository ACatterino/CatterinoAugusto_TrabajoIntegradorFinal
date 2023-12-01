import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://admin:A1234567@cluster0.xpdqg3k.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => console.log("DataBase OK"))
  .catch((err) => console.log("DataBase ERROR", err));

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/auth/login", (req, res) => {
  console.log(req.body);

  if (req.body.email === "test@test.com") {
    const token = jwt.sign(
      {
        email: req.body.email,
        fullName: "Catterino Augusto",
      },
      "secret123"
    );
  }

  res.json({
    success: "true",
    token,
  });
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
