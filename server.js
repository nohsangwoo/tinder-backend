import express from "express";
import mongoose from "mongoose";

// App config
const app = express();
const port = process.env.PORT || 8001;
// MiddleWares

// DB config

//  API Endpoints
app.get("./", (req, res) => res.status(200).send("HELLO SANGWOO!!"));

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
