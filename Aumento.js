var nome,salario
var aumento = 0;
var opcao
var continuar = true;

while(continuar){
    Perguntar();
    CalcularAumento();
    CalcularNovamente();
}

function Perguntar(){
    nome = prompt("Digite seu nome: ")
    salario = parseFloat(prompt("Digite seu salario: "))
}
function CalcularAumento(valor,porcentagem){
    if(salario == 0 || salario <= 1500){
        aumento = (salario * 20/100) + salario
        console.log(nome , "Sua porcentagem de aumento foi de 20%.", " E o seu aumento foi:", salario , "Para: ", aumento)
        return aumento;
    }
    else if(salario == 1501 || salario <= 2000){
        aumento = (salario * 15/100) + salario
        console.log(nome , "Sua porcentagem de aumento foi de 15%.", " E o seu aumento foi:", salario , "Para: ", aumento)
        return aumento;
    }
    else if(salario == 2001 || salario <= 3000){
        aumento = (salario * 10/100) + salario
        console.log(nome , "Sua porcentagem de aumento foi de 10%.", " E o seu aumento foi:", salario , "Para: ", aumento)
        return aumento;
    }
    else if(salario >= 3001){
        aumento = (salario * 5/100) + salario
        console.log(nome , "Sua porcentagem de aumento foi de 5%.", " E o seu aumento foi:", salario , "Para: ", aumento)
        console.log("Seu aumento foi de: ", aumento)
        return aumento
    }
}
function CalcularNovamente(){
    opcao = prompt("Digite 1 para continuar e 2 para Encerrar: ")
    if(opcao == 1){
        continuar = true;
    }
    else{
        continuar = false;
    }
}