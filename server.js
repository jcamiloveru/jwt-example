import express from "express";
import "dotenv/config";
import cors from "cors";
import profile from "./src/routers/profile.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(profile);

function initServer() {
  app.listen(port, () => console.log("server running in port " + port));
}

export default initServer;
