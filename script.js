var btngreet = document. getElementById("btnSaludo");
var txtName = document. getElementById("txtNombre");
var txtGreet = document. getElementById("txtSaludo");
var lista = [
    "Hello",
    "Bonjour",
    "hallo",
    "Ciao",
    "ola",
    "Namaste",
    "Aloha",
    "konniichiwa",
    "Merhaba"
]

function saludar (){
if (txtName.value == "") {
    alert("Error, ingrese un nombre.")
    txtGreet.innerHTML=""

}   else {
    var nombre = txtName.value
    var numero = Math.floor(Math.random()*lista.length)
    var saludo = lista[numero] + ", " + nombre
    txtGreet.innerHTML = saludo
}
}