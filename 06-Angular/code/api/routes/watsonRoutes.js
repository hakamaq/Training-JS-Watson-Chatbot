const express = require("express")
const router = express.Router();
const watson = require("../controllers/watsonController")

router.get("/createSession", watson.retrieveSession)
router.post("/ask", watson.message)
router.get("/", watson.init)

module.exports = router