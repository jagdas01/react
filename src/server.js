const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

app.get("/api/tours", async (req, res) => {
  try {
    const response = await axios.get(
      "https://course-api.com/react-tours-project"
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
