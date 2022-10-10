const Logs = require('../models/log')

const addLog = (req, res)=> {
  Logs.create(req.body, (err, log)=>{
    if(err) return res.status(500).send("Can't create log in database something happened, enjoy :)");
    res.status(200).send(log)
  })
}

const getLogs = (req, res) => {
  
}

module.exports = {
  addLog,
  getLogs
}