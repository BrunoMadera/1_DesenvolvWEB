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

}

function apagar(){
    
    localStorage.clear('Item1', lista);
}
