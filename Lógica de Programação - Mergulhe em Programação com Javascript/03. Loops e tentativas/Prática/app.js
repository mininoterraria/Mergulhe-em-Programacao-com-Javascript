//OBSERVAÇÃO: REMOVER COMENTÁRIOS MULTI-LINHAS DE CADA ALTERNATIVA SE QUISER EXECUTAR.


//01. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
/*
let contador = 1;

while (contador <= 10){
    console.log(contador);
    contador++;
}
*/

//02. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
/*
let contador = 10;

while (contador >= 0){
    console.log(contador);
    contador--;
}
*/

//03. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
/*
let contagemRegressiva = prompt("Insira um número maior que 0:");

const regex = /^-?[0-9]+([.,][0-9]+)?$/; //Regex para validar o campo input para aceitar apenas valores numéricos.

if(!regex.test(contagemRegressiva)){
    console.log("Contém caracteres inválidos!");
}else{ //A partir daqui só tem apenas valores numéricos

    contagemRegressiva = Number(contagemRegressiva); //Converte em valor numérico.

    if(contagemRegressiva === 0){
        console.log("0 não é aceito!");
    }else if(contagemRegressiva % 1 !== 0){
        console.log("Valores decimais não são aceitos!");
    }else{
        if(contagemRegressiva < 0){
            while(contagemRegressiva <= 0){
            alert(`Contagem Regressiva: ${contagemRegressiva}`);
            contagemRegressiva++;
            }
        }else{
            while(contagemRegressiva >= 0){
                alert(`Contagem Regressiva: ${contagemRegressiva}`);
                contagemRegressiva--;
            }
        }
        alert("PARTIUUUUUUUUUUUUU");
    }
    
}
*/

//04. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
/*
let contagemProgressiva = prompt("Insira um número maior que 0: ");

let contador = 0;

const regex = /^-?[0-9]+([.,][0-9]+)?$/;

if(!regex.test(contagemProgressiva)){
    alert("Contém caracteres inválidos!");
}else{
    contagemProgressiva = Number(contagemProgressiva);
    if(contagemProgressiva === 0){
        alert("0 não é aceito!");
    }else if(contagemProgressiva % 1 !== 0){
        alert("Valores decimais não são aceitos!");
    }else{
        if(contagemProgressiva < 0){
            while(contador >= contagemProgressiva){
                alert(`Contagem Progressiva: ${contador}`);
                contador--;
            }
        }else{
            while(contador <= contagemProgressiva){
                alert(`Contagem progressiva: ${contador}`);
                contador++;
            }
        }
        
        alert("PARTIUUUUUUU");
        
    }
}
*/






