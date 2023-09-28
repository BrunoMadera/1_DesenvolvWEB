//var hello = "Olá Mundo!";
//alert(hello);

//var NOME = "BMAD";
//var Num1 = 10;
//var Num2 = 20;
//var Soma = Num1 + Num2;
//var Multip = Num1 * Num2;


//alert("A soma do " + Num1 + " e do " + Num2 + " é " + Soma + "\n A multiplicação deles  é "+ Multip );
//console.log ("Meu nome é " + NOME);

//var Num1f;
//var Num2f;


var Nome = prompt("Digite seu nome:");

var Num1 = prompt("Digite o primeiro número:");
Num1f = parseInt(Num1);
console.log("1st" + Num1f);
var Num2 = prompt("Digite o segundo número:");

Num2f = parseInt(Num2);
console.log("2nd" + Num2f);

function Somar(Num1f, Num2f) {
    return Num1f + Num2f;
}

let valSoma = Somar(Num1f, Num2f);


var Multip = Num1f * Num2f;

alert("A soma do " + Num1f + " e do " + Num2f + " é " + valSoma + "\n A multiplicação deles  é " + Multip);
console.log(`Meu nome é ${Nome}`);
console.log("soma" + valSoma);
console.log("multiplica" + Multip);


function Subtrair(Num1f, Num2f) {

    if (Num1f < Num2f) {
        return "Não foi possivel subtrair!!"
    }
    else {
        return "A subtração é: " + (Num1f - Num2f);
    }

}


let valSubtrair = Subtrair(Num1f, Num2f);

alert(valSubtrair);
console.log(valSubtrair);



function Dividir(Num1f, Num2f) {
    if (Num2f <= 0) {
        return "Não foi possivel dividir!!"
    }
    else {
        return "A divisão é: " + Num1f / Num2f;
    }
}

let valDividir = Dividir(Num1f, Num2f);

alert(valDividir);
console.log(valDividir);


let user  = {
    nome: "bruno",
    idade : 38,
    estadocivil : "casado"
}

console.log(user);
console.log(user.estadocivil);

let fruta1  = {
    nome: "carambola",
    cor : "amarela",
    peso : "150gr",
    tipo : "fruta"
}

console.log(fruta1);
console.log(fruta1.nome);

let fruta2  = {
    nome: "morango",
    cor : "vermelho",
    peso : "250gr",
    tipo : "fruta"
}

console.log(fruta2);
console.log(fruta2.nome);


let frutas = [fruta1, fruta2]

console.log(frutas[0].nome)



let valor ="1"
const soma = valor + valor + valor
console.log (soma)