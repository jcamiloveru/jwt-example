import "dotenv/config";
import jwt from "jsonwebtoken";

export const generateToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.SECRET, (err, token) => {
      if (err) {
        reject(err);
      }
      resolve(token);
    });
  });
};
