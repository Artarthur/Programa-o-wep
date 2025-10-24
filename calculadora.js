const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
    response.send('Envie os parâmetros n1 e n2 para as rotas /soma /subtracao /multiplicacao /divisao')
})

app.get('/soma', (req, res) => {
    console.log("n1=" + req.query.n1)
    console.log("n2=" + req.query.n2)
    result = parseFloat(req.query.n1) + parseFloat(req.query.n2)
    if (isNaN(result)) {
        result = "isso não e um numero."
    } else {
        result = `${req.query.n1} + ${req.query.n2} = ${result}`
    }

    res.send({ conta: result })
})

app.get('/subtracao', (req, res) => {
    console.log('n1=' - req.query.n1 )
    console.log('n2=' - req.query.n2 )
    result = parseFloat(req.query.n1) - parseFloat(req.query.n2)
    if (isNaN(result)){
        result = "isso não e um numero."
    } else{
        result = `${req.query.n1} - ${req.query.n2} = ${result}` 
    }

})

app.get('/multiplicacao', (req, res) => {
    console.log('n1=' * req.query.n1 )
    console.log('n2=' * req.query.n2 )
    result = parseFloat(req.query.n1) * parseFloat(req.query.n2)
    if (isNaN(result)){
        result = "isso não e um numero."
    } else{
        result = `${req.query.n1} * ${req.query.n2} = ${result}` 
    }

})


app.get('/divisao', (req, res) => {
    console.log('n1=' / req.query.n1 )
    console.log('n2=' / req.query.n2 )
    result = parseFloat(req.query.n1) / parseFloat(req.query.n2)
    if (isNaN(result)){
        result = "isso não e um numero."
    }
    else if ( req.query.n2==0) {
        result = "você não pode dividir um numero pro zero"
        
    } 
    else{
        result = `${req.query.n1} / ${req.query.n2} = ${result}` 
    }

})


app.listen(8080)