dotenv.config();
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const tokenAuth = req.headers.authorization;
    const token = tokenAuth && tokenAuth.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Access denied. No token provided" });
    }

    const decoded = jwt.verify(token, process.env.SECRET);
    if (decoded) {
      const { userId } = decoded;

      // save in the req token and userId
      req.token = token;
      req.userId = userId;

      next();
    }
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ error: "Token invalid" });
  }
};

export default auth;
