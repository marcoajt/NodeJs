const db = require('./db')

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})
//Não se precisa mais dessa linha, ela e feita para criar a tabela, se tu usar denovo ela vai reacriar uma nova tabela (É usado uma unica vez)
//Post.sync({force: true})

module.exports = Post//exporta Post para ser usado em outros arquivos