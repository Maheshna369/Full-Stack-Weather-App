import mongoose from "mongoose";
import env from "dotenv";

env.config();
const connectDB = async () => {
  const URI = process.env.MONGODB_URI;
  await mongoose
    .connect(URI)
    .then(() => console.log(`MONGODB is connected to the server.`))
    .catch((err) =>
      console.log(`Error while connecting MONGODB to the server: ${err}`)
    );
};
export default connectDB;
