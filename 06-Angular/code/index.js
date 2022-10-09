// STEP 1 Create a new file in code/ outside /code/chat-ui 
//File name index.js

//STEP 9 Run command and get dotEnv
// npm i dotenv
require("dotenv").config();

//STEP 10 create new file
// named ".env" in /code/
// Copy from URL in WhatsApp



// STEP 2 Run Command
// npm i express
const express = require("express")
const app = express()

/*     START    */
// RUN npm i cors
const cors = require("cors")
app.use(cors())
/*     END    */

//STEP 3 Run Command
// npm i body-parser
const bodyParser = require("body-parser")

//STEP 4 initilize body-parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));


//STEP 5 initilize the express application
const port = process.env.PORT || 5001
app.listen(port, () => 
  console.log(`Server running on port ${port}`)
)

//STEP 7 Run Command 
//npm install ibm-watson


// STEP 8 Configure Watson
// Go to Watson Docs URL in WhatsApp 
// Copy assitant Authentication Initialization


// STEP 12 Scroll to end of index.js
// Create routes for Session
// server.js is /sessionId


// STEP 18 Install nodemon
// npm i nodemon

//STEP 19 run command
// npm init -y

//STEP 20 open package.json
// EDIT line
// "start": "node index.js" to
// "dev": "nodemon index.js && cd ./chat-ui && npm start"

//STEP 21 Run command to open server and client same time
// npm run dev

// STEP 22 Run command
// npm i concurrently

// STEP 23 edit "scripts"."dev" in package.json
// "dev": "nodemon index.js & cd ./chat-ui && npm start"

// STEP 24 ./chat-ui/chat.service.ts

const watsonRoutes = require("./api/routes/watsonRoutes")
app.use("/", watsonRoutes)