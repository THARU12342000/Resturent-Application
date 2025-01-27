import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Import route files
import reservationRoutes from "./routes/reservationRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // to parse JSON bodies
app.use(cors()); // to allow cross-origin requests

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Error connecting to the database:", error.message);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

// Routes
app.use("/api/reservations", reservationRoutes);

// Basic route for server check
app.get("/", (req, res) => {
  res.status(200).json({ success: true, message: "Server is up and running!" });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message || "Internal Server Error");
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Something went wrong. Please try again later.",
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
