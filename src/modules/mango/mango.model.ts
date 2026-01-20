import { Schema } from "mongoose";
import { IMango } from "./mango.interface";

const mangoSchema = new Schema<IMango>({
  name: { type: String, required: true, trim: true },
  image: { type: String, required: true, trim: true },
  variety: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  origin: { type: String, required: true },
  season: { type: String, required: true },
});
