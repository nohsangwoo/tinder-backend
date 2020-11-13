import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";

// App config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:Dj5G9yQe4FskTS89@cluster0.ay4zt.mongodb.net/tinderdb?retryWrites=true&w=majority`;

// MiddleWares

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//  API Endpoints
app.get("/", (req, res) => res.status(200).send("HELLO SANGWOO!!"));

app.post("/tinder/card", (req, rees) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
