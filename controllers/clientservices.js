const ClientService = require('../models/clientservices')

module.exports = (app) => {
  app.get('/clientservices', (req, res) => {
    ClientService.list(res)
  })

  app.get('/clientservices/:id', (req, res) => {
    const id = parseInt(req.params.id)

    ClientService.searchforId(id, res)
  })

  app.post('/clientservices', (req, res) => {
    const clientservice = req.body

    ClientService.add(clientservice, res)
  })

  app.patch('/clientservices/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const values = req.body

    ClientService.adjust(id, values, res)
  })

  app.delete('/clientservices/:id', (req, res) => {
    const id = parseInt(req.params.id)

    ClientService.delete(id, res)
  })
}
