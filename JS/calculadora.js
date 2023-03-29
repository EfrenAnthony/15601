var num1 = parseInt(document.getElementById("num1").value);
var num2 = parseInt(document.getElementById("num2").value);
var operador = "";
var resultado = "";


function agregar(valor) {
    resultado = document.getElementById("resultado").value;
    resultado += valor;
    document.getElementById("resultado").value = resultado;
}

function operar(op) {
    num1 = document.getElementById("resultado").value;
    operador = op;
    resultado = "";
    document.getElementById("resultado").value = resultado;
}

function calcular() {
    num2 = document.getElementById("resultado").value;
    if (operador == "+") {
        resultado = parseFloat(num1) + parseFloat(num2);
    } else if (operador == "-") {
        resultado = parseFloat(num1) - parseFloat(num2);
    } else if (operador == "*") {
        resultado = parseFloat(num1) * parseFloat(num2);
    } else if (operador == "/") {
        resultado = parseFloat(num1) / parseFloat(num2);
    }
    document.getElementById("resultado").value = resultado;
}

function borrar() {
    num1 = "";
    num2 = "";
    operador = "";
    resultado = "";
    document.getElementById("resultado").value = resultado;
}