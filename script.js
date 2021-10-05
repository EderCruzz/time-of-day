function carregar() {

var msg = document.getElementById('hora')
var img = document.getElementById('imagem')
var apresent = document.getElementById('apresent')
var agora = new Date()
var horario = agora.getHours()

if (horario < 5){
    apresent.innerHTML = 'Boa madrugada!'
}else if (horario < 12 ) {
    apresent.innerHTML = 'Bom dia!'
} else if (horario < 18) {
    apresent.innerHTML = 'Boa tarde!'
} else if (horario <= 23) {
    apresent.innerHTML = 'Boa noite!'
}

msg.innerHTML = `Agora são ${horario}:${agora.getMinutes()}:${agora.getSeconds()}`

if (horario < 5){
    img.src = 'assets/madrugada-250.jpg'
    document.body.style.background = '#303030'
}else if (horario < 12 ) {
    img.scr = 'assets/manhã-250.jpg'
    document.body.style.background = 'skyblue'
} else if (horario < 18) {
    img.src = 'assets/tarde-250.jpg'
    document.body.style.background = '#a16244'
} else if (horario <= 23) {
    img.src = 'assets/noite-250.jpg'
    document.body.style.background = '#2c2736'
} else {
    alert('[ERRO]')
}
}