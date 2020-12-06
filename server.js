const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(
  express.json({
    extended: false,
  })
);

const PORT = process.env.PORT || 5000;


app.use("/api/auth/", require("./routes/auth"));

app.use("/api/startup/", require("./routes/startup"));

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
