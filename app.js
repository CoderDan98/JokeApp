import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const currentYear = new Date().getFullYear();

app.get("/", (req, res) => {
  res.render("index", { currentYear, joke: "" });
});

app.post("/get-joke", async (req, res) => {
  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
    const jokeData = response.data;
    let joke = "";
    if (jokeData.type === "single") {
      joke = jokeData.joke;
    } else {
      joke = `${jokeData.setup} - ${jokeData.delivery}`;
    }
    res.render("index", { currentYear, joke });
  } catch (error) {
    console.error("Error fetching joke:", error);
    res.render("index", { currentYear, joke: "Failed to fetch a joke." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
