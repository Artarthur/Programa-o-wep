const port =8000
const express = require("express")
const app = express()
app.set('view engine','ejs');
const random = (((Math.random()) *100 ) % 100)+1

app.get("/",(res,req)=>{
res.render(index),adivinhe
})
app.get("/sorteio",(res,req)=>{
    if(adivinhe < random){
    res.render("index", {resposta : "o seu número e menor que o meu numero"})
}
else if(adivinhe > random){
    res.render("index", {resposta : " o seu número e maior que o meu numero"})
}
else {
    res.render("index", {resposta : "Parabens você acertou"})
}

})
app.listen(port);
console.log(`Servidor funcionando na porta: ${port}`);