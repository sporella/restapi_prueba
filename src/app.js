import express from "express";
import morgan from "morgan";
import cors from "cors";
import TasksRoutes from "./routes/tasksroutes";

const app = express();

// Settings
app.set("port", process.env.PORT || 2000);

// Middlewares
const corsOptions = {};
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

app.use("/api/tasks", TasksRoutes);

export default app;
