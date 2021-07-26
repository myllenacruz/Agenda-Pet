const moment = require('moment')
const connection = require('../database/connection')

class ClientService {
  add(clientservice, res) {
    const creationDate = moment().format('YYYY-MM-DD HH:mm:ss')
    const date = moment(clientservice.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
    
    const validDate = moment(date).isSameOrAfter(creationDate)
    const validClient = clientservice.client.lenght >= 5

    const validations = [
      {
        name: 'date',
        valide: validDate,
        message: 'Date must be bigger or equal to current date'
      },
      {
        name: 'client',
        valid: validClient,
        message: 'Client must have at least 5 characters'
      }
    ]

    const errs = validations.filter(field => !field.valid)
    const existErrs =  errs.length
    if(existErrs) {
      res.status(400).json(errs)
    } else {
      const datedService = { ...clientservice, creationDate, date }

      const sql = 'INSERT INTO ClientServices SET?'
      connection.query(sql, datedService, (err, results) => {
        if (err) {
          res.status(400).json(err)
        } else {
          res.status(201).json(results)
        }
      })
    }
  }
}

module.exports = new ClientService()
