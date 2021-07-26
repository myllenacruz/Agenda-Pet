const ClientService = require('../models/clientservices')

module.exports = (app) => {
  app.get('/clientservices', (req, res) => {
    res.send('Rota de atendimentos!')

    app.post('/clientservices', (req, res) => {
      const clientservice = req.body

      ClientService.add(clientservice, res)
    })
  })
}
