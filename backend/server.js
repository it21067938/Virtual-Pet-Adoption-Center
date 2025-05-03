import mongoose from "mongoose";
import app from "./app.js";

const PORT = process.env.PORT || 8060;
const URL = process.env.MONGODB_URL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("MongoDB Connection Success...");
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT} 🚀🚀🚀`);
});
