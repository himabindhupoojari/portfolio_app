// const express = require("express");
// const cors = require("cors");

// const app = express();

// const mongoose = require("mongoose");

// mongoose.connect("your-mongodb-url")
//   .then(() => console.log("DB Connected"))
//   .catch(err => console.log(err));

// // Allow frontend domain (update later after Netlify deploy)
// app.use(cors({
//   origin: "*", // later replace with your frontend URL
// }));

// app.use(express.json());

// app.get("/api/test", (req, res) => {
//   res.json({ message: "Backend is working 🚀" });
// });

// // IMPORTANT for Render
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contact");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/contact", contactRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});