var nome,salario
var aumento = 0;
Perguntar();
CalcularAumento();
function Perguntar(){
    nome = prompt("Digite seu nome: ")
    salario = parseFloat(prompt("Digite seu salario: "))
}
function CalcularAumento(valor,porcentagem){
    if(salario == 0 || salario <= 1.500){
        aumento = (1.20 * salario) + salario
        console.log("Seu aumento foi de: ", aumento)
        return aumento;
    }
    else if(salario == 1.501 || salario <= 2.000){
        aumento = (0.15 * salario) + salario
        console.log("Seu aumento foi de: ", aumento)
        return aumento;
    }
    else if(salario == 2.001 || salario <= 3.000){
        aumento = (0.10 * salario) + salario
        console.log("Seu aumento foi de: ", aumento)
        return aumento;
    }
    else if(salario >= 3.000){
        aumento = (0.05 * salario) + salario
        console.log("Seu aumento foi de: ", aumento)
        return aumento
    }
}