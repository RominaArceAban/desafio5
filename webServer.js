const express = require('express')

const app = express()
const PORT = 8080

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const productos = []

app.get('/productos', (req, res) => {
    res.render('indexVista', { productos })
})
app.post('/', (req, res) => {
    productos.push(req.body)
    console.log(req.body, 'added to product')

    res.render('indexFormulario', { productos })
})


app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})