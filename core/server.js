import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./src/routes/index.js";
import { sequelize } from "./src/models/index.js";

dotenv.config();

const app = express();

// ✅ Allow CORS from anywhere
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// ✅ Log all requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// Routes
app.use("/api", routes);

// Sync DB and start server
const PORT = process.env.PORT || 3000;

sequelize
  .sync({ alter: false }) // alter: true only if you want schema updates
  .then(() => {
    console.log("✅ Database synced");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to sync database:", err);
  });

export default app;
