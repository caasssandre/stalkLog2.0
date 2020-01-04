const connection = require('./connection')


function getLogs(db = connection){
  return db('logs')
  .then(thing=>console.log(thing))
}

module.exports = {
  getLogs
}