import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "Cors"
import connection_url from "./url.js"
// App config
const app = express();
const port = process.env.PORT || 8001;


// MiddleWares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  
}).then(()=>console.log("MonggoDB Conndected...")).catch(err=>console.log(err));

//  API Endpoints
app.get("/", (req, res) => res.status(200).send("HELLO SANGWOO!!"));



app.post("/tinder/cards", (req, res) => {
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
