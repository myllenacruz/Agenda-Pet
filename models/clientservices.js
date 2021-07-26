const moment = require('moment')
const connection = require('../database/connection')

class ClientService {
  add(clientservice) {
    const creationDate = moment().format('YYYY-MM-DD HH:mm:ss')
    const date = moment(clientservice.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
    const datedService = { ...clientservice, creationDate, date }

    const sql = 'INSERT INTO ClientServices SET?'
    connection.query(sql, datedService, (err, results) => {
      if (err) {
        console.log(err)
      } else {
        console.log(results)
      }
    })
  }
}

module.exports = new ClientService()
