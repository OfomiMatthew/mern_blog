import express from "express";

const app = express();
const PORT = 3600;

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
