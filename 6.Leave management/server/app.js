const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const leaveRoutes = require("./routes/leaveRoutes");

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/leaves", leaveRoutes);

app.listen(5000, () => console.log(`Server running on port 5000`));
