import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.routes.js";
import messageRoute from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectTOMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();

app.use(express.json()); //to parse the incoming req with json payloads 
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  connectTOMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
