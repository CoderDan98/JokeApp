import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const currentYear = new Date().getFullYear();

app.get("/", (req, res) => {
  res.render("index", { currentYear });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
