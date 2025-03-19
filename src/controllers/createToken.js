import { generateToken } from "../utils/jwt.js";

const createToken = (req, res) => {
  // Variables to use
  const userId = req.body.userId;
  const username = req.body.username;

  // Check if the username and userId are provided
  if (!username || !userId) {
    return res.status(400).json({ error: "Username and userId are required" });
  }

  try {
    // Generate the token
    const token = generateToken({ username, userId });

    // Response with the token
    res.status(200).json({ token });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default createToken;
