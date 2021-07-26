const connection = require('../database/connection')

class ClientService {
  add(clientservice) {
    const sql = 'INSERT INTO ClientServices SET?'

    connection.query(sql, clientservice, (err, results) => {
      if (err) {
        console.log(err)
      } else {
        console.log(results)
      }
    })
  }
}

module.exports = new ClientService()
