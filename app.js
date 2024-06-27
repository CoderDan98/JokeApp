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

app.get("/misc", (req, res) => {
  res.render("misc", { currentYear, joke: "" });
});

app.get("/programming", (req, res) => {
  res.render("programming", { currentYear, joke: "" });
});

app.get("/dark", (req, res) => {
  res.render("dark", { currentYear, joke: "" });
});

app.get("/pun", (req, res) => {
  res.render("pun", { currentYear, joke: "" });
});

app.get("/spooky", (req, res) => {
  res.render("spooky", { currentYear, joke: "" });
});

app.get("/christmas", (req, res) => {
  res.render("christmas", { currentYear, joke: "" });
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

app.post("/get-misc-joke", async (req, res) => {
  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Misc");
    const jokeData = response.data;
    let joke = "";
    if (jokeData.type === "single") {
      joke = jokeData.joke;
    } else {
      joke = `${jokeData.setup} - ${jokeData.delivery}`;
    }
    res.render("misc", { currentYear, joke });
  } catch (error) {
    console.error("Error fetching joke:", error);
    res.render("misc", { currentYear, joke: "Failed to fetch a joke." });
  }
});

app.post("/get-programming-joke", async (req, res) => {
  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Programming");
    const jokeData = response.data;
    let joke = "";
    if (jokeData.type === "single") {
      joke = jokeData.joke;
    } else {
      joke = `${jokeData.setup} - ${jokeData.delivery}`;
    }
    res.render("programming", { currentYear, joke });
  } catch (error) {
    console.error("Error fetching joke:", error);
    res.render("programming", { currentYear, joke: "Failed to fetch a joke." });
  }
});

app.post("/get-dark-joke", async (req, res) => {
  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Dark");
    const jokeData = response.data;
    let joke = "";
    if (jokeData.type === "single") {
      joke = jokeData.joke;
    } else {
      joke = `${jokeData.setup} - ${jokeData.delivery}`;
    }
    res.render("dark", { currentYear, joke });
  } catch (error) {
    console.error("Error fetching joke:", error);
    res.render("dark", { currentYear, joke: "Failed to fetch a joke." });
  }
});

app.post("/get-pun-joke", async (req, res) => {
  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Pun");
    const jokeData = response.data;
    let joke = "";
    if (jokeData.type === "single") {
      joke = jokeData.joke;
    } else {
      joke = `${jokeData.setup} - ${jokeData.delivery}`;
    }
    res.render("pun", { currentYear, joke });
  } catch (error) {
    console.error("Error fetching joke:", error);
    res.render("pun", { currentYear, joke: "Failed to fetch a joke." });
  }
});

app.post("/get-spooky-joke", async (req, res) => {
  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Spooky");
    const jokeData = response.data;
    let joke = "";
    if (jokeData.type === "single") {
      joke = jokeData.joke;
    } else {
      joke = `${jokeData.setup} - ${jokeData.delivery}`;
    }
    res.render("spooky", { currentYear, joke });
  } catch (error) {
    console.error("Error fetching joke:", error);
    res.render("spooky", { currentYear, joke: "Failed to fetch a joke." });
  }
});

app.post("/get-christmas-joke", async (req, res) => {
  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Christmas");
    const jokeData = response.data;
    let joke = "";
    if (jokeData.type === "single") {
      joke = jokeData.joke;
    } else {
      joke = `${jokeData.setup} - ${jokeData.delivery}`;
    }
    res.render("christmas", { currentYear, joke });
  } catch (error) {
    console.error("Error fetching joke:", error);
    res.render("christmas", { currentYear, joke: "Failed to fetch a joke." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
