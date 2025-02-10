import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
    try {
        const tokenAuth = req.headers.authorization;
        const token = tokenAuth && tokenAuth.split(" ")[1];

        if (!token) {
            return res
                .status(401)
                .json({ error: "Access denied. No token provided" });
        }

        const decoded = jwt.verify(token, process.env.SECRET);
        const { userId } = decoded;

        req.token = token;
        req.userId = userId;

        console.log("validacion OK");
        next();
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Internal Server Error" }); // Improve error handling
    }
};

export default auth;
