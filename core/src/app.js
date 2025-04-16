import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import { sequelize } from "./models/index.js";

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/api", routes);

// Sync DB and start server
const PORT = process.env.PORT || 3000;

sequelize
  .sync({ alter: true }) // Use { force: true } to reset tables each time
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
