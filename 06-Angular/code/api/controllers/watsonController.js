const AssistantV2 = require("ibm-watson/assistant/v2")
const { IamAuthenticator } = require("ibm-watson/auth")

const assistant = new AssistantV2({
  version: process.env.VERSION, // Replace '{version}' 
  authenticator: new IamAuthenticator({
    apikey: process.env.APIKEY, // Replace '{apikey}' 
  }),
  serviceUrl: process.env.WATSON_URL, // Replace '{url}' 
});

const retrieveSession =  (req, res) => {
  // STEP 14 call assistant to create session
  assistant.createSession({assistantId: process.env.ASSISTANT_ID})
           .then(session => res.json(session.result.session_id)) // UPDATE
           .catch(err => res.json(err))
}

const ask = async (req, res) =>{
  const { session_id, text } = req.body 
   
   const message = {
     assistantId: process.env.ASSISTANT_ID,
     sessionId: session_id, 
     input: {
       message_type: 'text',
        text: text
       }
     }
   
     assistant.message(message)
              .then(response => res.json(response.result))
              .catch(err => res.json(err))
 }
 // STEP 4 
 module.exports = {
  retrieveSession,
  ask
 }