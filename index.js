const customExpress = require('./config/customExpress')
const Tables = require('./database/tables')

const connection = require('./database/connection')
connection.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Sucesso!')
    Tables.init(connection)

    const app = customExpress()
    app.listen(3001, () => {
      console.log('Ok...')
    })
  }
})
