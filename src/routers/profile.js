import { Router } from "express";
import auth from "../middlewares/auth.js";
import { profile } from "../controllers/profile.js";

const router = Router();

router.post("/profile", auth, profile);

export default router;
