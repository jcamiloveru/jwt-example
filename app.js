import express from "express";
import "dotenv/config";
import cors from "cors";
import router from "./src/routers/token.js";

// Express app initialization with his middlewares
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use("/token", router);

// Server initialization
function initServer() {
  app.listen(port, () => console.log("server running in port " + port));
}

initServer();
