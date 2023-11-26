const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

const categories = require('./data/categories.json')
const news = require('./data/news.json')


app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Send category to the SERVER
app.get('/category', (req, res) => {
  res.send(categories)
})

// Send News to the SERVER
app.get('/news', (req, res) => {
  res.send(news)
})

// Send News to the SERVER by id
app.get('/news/:id', (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find(n => n._id === id);
  res.send(selectedNews)
})

// Send News to the SERVER by id
app.get('/category/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id == 0) {
    res.send(news)
  }
  else {
    const selectedCategory = news.filter(n => parseInt(n.category_id) === id);
    res.send(selectedCategory)
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})