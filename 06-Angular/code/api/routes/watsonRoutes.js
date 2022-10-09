//STEP 1 create a new folder in the root directory /api/routes

// STEP 2 create a new file called watsonRoutes.js in the /api/routes/watsonRoute.js

const express = require("express");
const route = express.Router();
// STEP 5
const watsonController = require("../controllers/watsonController")

// STEP 3 copy the /createSession route in index
// and copy the /ask route in index

route.get('/createSession', watsonController.retrieveSession)

route.post("/ask", watsonController.ask)
// STEP 6
module.exports = route