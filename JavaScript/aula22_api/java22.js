let campoTexto = document.getElementById('Item1')
let lista = JSON.parse(localStorage.getItem('Item1')) || []


function salvar() {
    console.log(lista)
    lista.push(campoTexto.value)
    console.log(lista)
    localStorage.setItem('Item1', JSON.stringify(lista))
}

function mostrar(){
    
     localStorage.getItem('Item1', lista);
      alert(lista)
      //p.innerText = lista;

    }

function apagar(){
    
    localStorage.clear('Item1', lista);
}


//////////////////


var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState); //readyState será 0

let pais = "paraguay"
xhr.open('GET', 'https://restcountries.com/v3.1/name/' + pais, true);
console.log('OPENED', xhr.readyState); //readyState será 1

xhr.onprogress = function () {
    console.log('LOADING', xhr.readyState); //readyState será 3
};
xhr.onload = function () {
    console.log('DONE', xhr.readyState); //readyState será 4
    resultado = ( JSON.parse(xhr.responseText))
    div = document.getElementById("mostrarhtml")
    div.innerText = resultado[0].name.common + "  =   " + resultado[0].name.official
    console.log(resultado[0].name)

    createImage(resultado[0].flags.png)
        
};

function createImage(src){
    var image = document.createElement("img")
    var imageParent = document.getElementById("bandeira");
    image.id = "bandeira2";
    image.src = src;
    imageParent.appendChild(image)

}

xhr.send();

