import express from "express";
import morgan from "morgan";
import tasksRouter from "./routes/tasks.routes.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/tasks", tasksRouter);

export default app;
