import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import connectDb from "./config/connectDb";
import { connectRedis } from "./config/redisConnect";

const PORT = process.env.PORT || 5000;

connectDb();

connectRedis();

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
