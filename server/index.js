const express = require("express");
const cors = require("cors");

const app = express();

// Allow frontend domain (update later after Netlify deploy)
app.use(cors({
  origin: "*", // later replace with your frontend URL
}));

app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working 🚀" });
});

// IMPORTANT for Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});