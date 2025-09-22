import { Router } from "express";

import auth from "../middlewares/auth.js";
import createToken from "../controllers/createToken.js";

const router = Router();

// Route to generate a token
router.post("/create", createToken);

// Verify the token with midd "auth"
router.get("/check", auth, (req, res) => {
  res.status(200).json({ msg: `the token is valid, you userId is: ${req.userId}`});
});

export default router;
