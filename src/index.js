import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// This is a simple route that returns a welcome message
// You can access it by navigating to http://localhost:3000/
app.get("/", (req, res) => {
  res.send("Welcome to the Express.js server!");
})


// This route for feature about
app.get("/about", (req, res) => { 
  res.send("This is the about page of the Express.js server!");
})


app.listen(PORT, (error) => {
 
  if (error) {
    console.error("Error starting the server:", error);
  }

  console.log(`Server is running on http://localhost:${PORT}`);
})
