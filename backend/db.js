import dotenv from "dotenv";
import mongoose from "mongoose";

mongoose.set('strictQuery', false)

const DB = mongoose
  .connect(process.env.MONGODB_URI)
  .then((res) => console.log("DB connected"))
  .catch((error) => () => console.log(error));

export default DB