import "dotenv/config";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import compression from "compression";

import connectDB from "./config/db.js";

import aiRoutes from "./routes/aiRoutes.js";
import designRoutes from "./routes/designRoutes.js";

// ==========================
// Environment Validation
// ==========================

if (!process.env.MONGO_URI) {
  throw new Error("❌ MONGO_URI is missing in .env");
}

// ==========================
// App Initialization
// ==========================

const app = express();

app.disable("x-powered-by");
app.set("trust proxy", 1);

// ==========================
// Database Connection
// ==========================

connectDB();

// ==========================
// Security Middleware
// ==========================

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

// ==========================
// Compression
// ==========================

app.use(compression());

// ==========================
// Logger
// ==========================

app.use(morgan("dev"));

// ==========================
// CORS
// ==========================
const allowedOrigins = [
  "http://localhost:5173",
  "https://ai-design-studio-m-sigma.vercel.app"
];

app.use(
  cors({
    origin: (origin, callback) => {

      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Blocked by CORS"));
      }

    },
    credentials: true
  })
);


// ==========================
// Rate Limiter (AI APIs)
// ==========================

const aiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many AI requests. Please try again later.",
  },
});

app.use("/api/ai", aiLimiter);

// ==========================
// Body Parser
// ==========================

app.use(
  express.json({
    limit: "25mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "25mb",
  })
);

// ==========================
// Routes
// ==========================

app.use("/api/ai", aiRoutes);
app.use("/api/designs", designRoutes);

// ==========================
// Health Check
// ==========================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 AI Design Studio API Running",
    timestamp: new Date().toISOString(),
  });
});

// ==========================
// 404 Handler
// ==========================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

// ==========================
// Global Error Handler
// ==========================

app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err);

  res.status(err.status || 500).json({
    success: false,
    message:
      process.env.NODE_ENV === "production"
        ? "Internal Server Error"
        : err.message,
  });
});

// ==========================
// Start Server
// ==========================

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// ==========================
// Graceful Shutdown
// ==========================

process.on("SIGINT", () => {
  console.log("\n🛑 Shutting down server...");

  server.close(() => {
    console.log("✅ Server closed successfully.");
    process.exit(0);
  });
});

process.on("SIGTERM", () => {
  console.log("\n🛑 SIGTERM received.");

  server.close(() => {
    console.log("✅ Server stopped.");
    process.exit(0);
  });
});
