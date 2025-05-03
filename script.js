function calcularvalores() {
    let media = ((parseFloat(document.getElementById("idade1").textContent) + parseFloat(document.getElementById("idade2").textContent)) /2)
    let salario = ((parseFloat(document.getElementById("salariolegau").textContent) + parseFloat(document.getElementById("salariolegau2").textContent)) /2)
    document.getElementById("medialegauidade").textContent = media
    document.getElementById("mediasalario").textContent = "R$" + salario
    
}

function listopidade() {
    document.getElementById("medialegauidade").textContent = "(" + parseFloat(document.getElementById("idade1").textContent) + " + " + parseFloat(document.getElementById("idade2").textContent) + ") /2" 
    document.getElementById("mediasalario").textContent = "(" + parseFloat(document.getElementById("salariolegau").textContent) + " + " + parseFloat(document.getElementById("salariolegau").textContent) + ") /2" 
}

function clean() {
    document.getElementById("medialegauidade").textContent = "18"
    document.getElementById("mediasalario").textContent = "R$3.5"
}