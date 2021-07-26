class Tables {
  init(connection) {
    this.connection = connection
    this.createClientServices()
  }
  createClientServices() {
    const sql =
      'CREATE TABLE IF NOT EXISTS ClientServices (id int NOT NULL AUTO_INCREMENT, client varchar(50) NOT NULL, pet varchar(20), service varchar(20) NOT NULL, status varchar(20) NOT NULL, obs text, PRIMARY KEY(id))'
    this.connection.query(sql, (erro) => {
      if (erro) {
        console.log(erro)
      } else {
        console.log('Tabela de atendimentos criada com sucesso.')
      }
    })
  }
}

module.exports = new Tables()
