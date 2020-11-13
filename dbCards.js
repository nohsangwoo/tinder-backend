import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  name: {type:String},
  imgUrl: {type:String},
});

export default mongoose.model("cards", cardSchema);
