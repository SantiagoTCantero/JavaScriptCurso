let nombre = prompt("ingresa tu nombre :");
let altura = parseFloat (prompt("ingresa tu altura :"));
let peso = parseFloat (prompt("ingresa tu peso :"));
let altura_alcuadrado = altura*altura

let mic = peso/altura_alcuadrado
let salida = nombre + "tu mic es" + mic.toFixed (2)

alert (salida)
