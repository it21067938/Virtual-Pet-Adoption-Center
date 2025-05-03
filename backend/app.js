import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());

import petRoute from "./routes/petRoutes.js";
app.use("/", petRoute);

export default app;
