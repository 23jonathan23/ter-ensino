const jwt = require('jsonwebtoken')

const { formatDateStr } = require('./util/formatDate')

const getArticles = app => async (req, res) => {
  let tokenValid

  if (!req.headers['authorization'])
    return res.status(403).send({ error: 'Usuário não autorizado' })

  const token = req.headers['authorization']

  jwt.verify(token, process.env.AUTH_SECRET, (err, decode) => {
    if (err) return (tokenValid = false)

    return (tokenValid = true)
  })

  if (!tokenValid)
    return res.status(403).send({ error: 'Usuário não autorizado' })

  const listArticles = await app.db.select('*').from('articles')
  const listUsers = await app.db.select('*').from('users')

  const articles = listArticles.map(article => {
    const author = listUsers.filter(user => user.id === article.userId)
    article.author = {
      id: author[0].id,
      name: author[0].name,
      imageURL: author[0].imageURL,
    }
    article.dateArticle = formatDateStr(article.createAt)
    delete article.userId

    return article
  })

  return res.send({ articles })
}

module.exports = { getArticles }
