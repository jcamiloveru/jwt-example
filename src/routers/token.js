import { Router } from "express";
import auth from "../middlewares/auth.js";
import createToken from "../controllers/createToken.js";

const router = Router();

// Route to generate a token
router.post("/create", createToken);

// Verify the token
router.get("/check", auth, (_, res) => {
  res.status(200).json({ response: true });
});

export default router;
