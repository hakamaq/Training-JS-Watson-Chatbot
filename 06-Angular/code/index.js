
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

// STEP 6 get route default
app.get("/", (req, res) => 
  res.send("Ready to use Watson!")
)

//STEP 7 Run Command 
//npm install ibm-watson
const AssistantV2 = require("ibm-watson/assistant/v2")
const { IamAuthenticator } = require("ibm-watson/auth")

// STEP 8 Configure Watson
// Go to Watson Docs URL in WhatsApp 
// Copy assitant Authentication Initialization
const assistant = new AssistantV2({
  version: process.env.VERSION, // Replace '{version}' 
  authenticator: new IamAuthenticator({
    apikey: process.env.APIKEY, // Replace '{apikey}' 
  }),
  serviceUrl: process.env.WATSON_URL, // Replace '{url}' 
});

// STEP 12 Scroll to end of index.js
// Create routes for Session
// server.js is /sessionId
app.get('/createSession', (req, res) => {
  // STEP 14 call assistant to create session
  assistant.createSession({assistantId: process.env.ASSISTANT_ID})
           .then(session => res.json(session.result.session_id)) // UPDATE
           .catch(err => res.json(err))
})

//STEP 13 route to ask assitant 
app.post("/ask", async (req, res) =>{ // STEP 15 ADD async (req, res)
  // STEP 16 create message request object 
  // ======= AFTER BREAK MODIFICATIONS ==== 
  
  // STEP 17 ADD THIS LINE in /ask function
  /*17*/ const { session_id, text } = req.body 
  console.log("/ask POST body:", req.body)
  console.log("/ask POST session_id:", session_id)
  console.log("/ask POST text:", text)
  
  const message = {
    assistantId: process.env.ASSISTANT_ID,
    /* 17: remove req.body. */sessionId: session_id, 
    input: {
      message_type: 'text',
      /* 17: remove req.body. */ text: text
      }
    }
  
    assistant.message(message)
             .then(response => res.json(response.result))
             .catch(err => res.json(err))
})

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