
function incluir(){

    let nota = document.getElementById("nota")
    let peso = document.getElementById("peso")

    let ListaNotas = JSON.parse(localStorage.getItem('notas')) || []
    let ListaPesos = JSON.parse(localStorage.getItem('pesos')) || []

    ListaNotas.push(parseInt(nota.value))
    ListaPesos.push(parseInt(peso.value))

    localStorage.setItem('notas', JSON.stringify(ListaNotas))
    localStorage.setItem('pesos', JSON.stringify(ListaPesos))


}



function calcular(){

    let notas_como_numero = JSON.parse(localStorage.getItem("notas"))
    let pesos_como_numero = JSON.parse(localStorage.getItem("pesos"))

    console.log(notas_como_numero)


    let media = 0
    let somaPesos = 0
    
      
    //console.log(notas_como_numero.length)


    for (let i = 0; i < notas_como_numero.length; i++) {
        media = media + notas_como_numero[i]*pesos_como_numero[i]
        somaPesos = somaPesos + pesos_como_numero[i]
    }

    media = media / somaPesos

    console.log("Média é" + media)
    console.log("somapesos é" + somaPesos)


let elementocomResultado = document.getElementById("mostrarresultado")
elementocomResultado.innerText  = media



}

function limpar(){

    localStorage.clear("notas")
    localStorage.clear("pesos")

}