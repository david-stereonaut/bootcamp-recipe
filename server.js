const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/sanity', function (req, res) {
    res.send("OK")
})

app.get('/recipes/:ingredient', function (req, res) {
    const ingredient = req.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, response) {
        let data = (JSON.parse(response)).results
        data = data.map(({ ingredients, title, thumbnail, href }) => ({
            ingredients,
            title,
            thumbnail,
            href
        }))
        res.send(data)
    })
})

const port = 8080
app.listen(port, function () {
    console.log("Server running on port " + port)
})
