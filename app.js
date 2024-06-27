import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

// Create an instance of Express
const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
// Middleware to serve static files from the "public" directory
app.use(express.static("public"));
// Set the view engine to EJS
app.set("view engine", "ejs");

// Get the current year
const currentYear = new Date().getFullYear();

// Routes
app.get("/", (req, res) => {
  // Render the index page with the current year and an empty joke
  res.render("index", { currentYear, joke: "" });
});

app.get("/misc", (req, res) => {
  // Render the misc page with the current year and an empty joke
  res.render("misc", { currentYear, joke: "" });
});

app.get("/programming", (req, res) => {
  // Render the programming page with the current year and an empty joke
  res.render("programming", { currentYear, joke: "" });
});

app.get("/dark", (req, res) => {
  // Render the dark page with the current year and an empty joke
  res.render("dark", { currentYear, joke: "" });
});

app.get("/pun", (req, res) => {
  // Render the pun page with the current year and an empty joke
  res.render("pun", { currentYear, joke: "" });
});

app.get("/spooky", (req, res) => {
  // Render the spooky page with the current year and an empty joke
  res.render("spooky", { currentYear, joke: "" });
});

app.get("/christmas", (req, res) => {
  // Render the christmas page with the current year and an empty joke
  res.render("christmas", { currentYear, joke: "" });
});

// Route to fetch a random joke
app.post("/get-joke", async (req, res) => {
  try {
    // Fetch a joke from the API
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
    const jokeData = response.data;
    let joke = "";
    if (jokeData.type === "single") {
      joke = jokeData.joke;
    } else {
      joke = `${jokeData.setup} - ${jokeData.delivery}`;
    }
    // Render the index page with the fetched joke
    res.render("index", { currentYear, joke });
  } catch (error) {
    console.error("Error fetching joke:", error);
    // Render the index page with an error message
    res.render("index", { currentYear, joke: "Failed to fetch a joke." });
  }
});

// Route to fetch a miscellaneous joke
app.post("/get-misc-joke", async (req, res) => {
  try {
    // Fetch a joke from the API
    const response = await axios.get("https://v2.jokeapi.dev/joke/Misc");
    const jokeData = response.data;
    let joke = "";
    if (jokeData.type === "single") {
      joke = jokeData.joke;
    } else {
      joke = `${jokeData.setup} - ${jokeData.delivery}`;
    }
    // Render the misc page with the fetched joke
    res.render("misc", { currentYear, joke });
  } catch (error) {
    console.error("Error fetching joke:", error);
    // Render the misc page with an error message
    res.render("misc", { currentYear, joke: "Failed to fetch a joke." });
  }
});

// Route to fetch a programming joke
app.post("/get-programming-joke", async (req, res) => {
  try {
    // Fetch a joke from the API
    const response = await axios.get("https://v2.jokeapi.dev/joke/Programming");
    const jokeData = response.data;
    let joke = "";
    if (jokeData.type === "single") {
      joke = jokeData.joke;
    } else {
      joke = `${jokeData.setup} - ${jokeData.delivery}`;
    }
    // Render the programming page with the fetched joke
    res.render("programming", { currentYear, joke });
  } catch (error) {
    console.error("Error fetching joke:", error);
    // Render the programming page with an error message
    res.render("programming", { currentYear, joke: "Failed to fetch a joke." });
  }
});

// Route to fetch a dark joke
app.post("/get-dark-joke", async (req, res) => {
  try {
    // Fetch a joke from the API
    const response = await axios.get("https://v2.jokeapi.dev/joke/Dark");
    const jokeData = response.data;
    let joke = "";
    if (jokeData.type === "single") {
      joke = jokeData.joke;
    } else {
      joke = `${jokeData.setup} - ${jokeData.delivery}`;
    }
    // Render the dark page with the fetched joke
    res.render("dark", { currentYear, joke });
  } catch (error) {
    console.error("Error fetching joke:", error);
    // Render the dark page with an error message
    res.render("dark", { currentYear, joke: "Failed to fetch a joke." });
  }
});

// Route to fetch a pun joke
app.post("/get-pun-joke", async (req, res) => {
  try {
    // Fetch a joke from the API
    const response = await axios.get("https://v2.jokeapi.dev/joke/Pun");
    const jokeData = response.data;
    let joke = "";
    if (jokeData.type === "single") {
      joke = jokeData.joke;
    } else {
      joke = `${jokeData.setup} - ${jokeData.delivery}`;
    }
    // Render the pun page with the fetched joke
    res.render("pun", { currentYear, joke });
  } catch (error) {
    console.error("Error fetching joke:", error);
    // Render the pun page with an error message
    res.render("pun", { currentYear, joke: "Failed to fetch a joke." });
  }
});

// Route to fetch a spooky joke
app.post("/get-spooky-joke", async (req, res) => {
  try {
    // Fetch a joke from the API
    const response = await axios.get("https://v2.jokeapi.dev/joke/Spooky");
    const jokeData = response.data;
    let joke = "";
    if (jokeData.type === "single") {
      joke = jokeData.joke;
    } else {
      joke = `${jokeData.setup} - ${jokeData.delivery}`;
    }
    // Render the spooky page with the fetched joke
    res.render("spooky", { currentYear, joke });
  } catch (error) {
    console.error("Error fetching joke:", error);
    // Render the spooky page with an error message
    res.render("spooky", { currentYear, joke: "Failed to fetch a joke." });
  }
});

// Route to fetch a Christmas joke
app.post("/get-christmas-joke", async (req, res) => {
  try {
    // Fetch a joke from the API
    const response = await axios.get("https://v2.jokeapi.dev/joke/Christmas");
    const jokeData = response.data;
    let joke = "";
    if (jokeData.type === "single") {
      joke = jokeData.joke;
    } else {
      joke = `${jokeData.setup} - ${jokeData.delivery}`;
    }
    // Render the christmas page with the fetched joke
    res.render("christmas", { currentYear, joke });
  } catch (error) {
    console.error("Error fetching joke:", error);
    // Render the christmas page with an error message
    res.render("christmas", { currentYear, joke: "Failed to fetch a joke." });
  }
});

// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
