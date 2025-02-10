import { generateToken } from "./src/utils/jwt.js";

(async () => {
  const token = await generateToken({ userId: 1234, rol: "user" });
  console.log(token);
})();
