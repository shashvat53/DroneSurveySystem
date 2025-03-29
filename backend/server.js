const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const router = require("./routes/index");
const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());

const PORT = 8080 || process.env.PORT;

app.use("/api", router);

app.get("/", (request, response) => {
  response.json({
    message: "Server is running on PORT: ",
    PORT,
  });
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is listening on PORT: ", PORT);
  });
});
