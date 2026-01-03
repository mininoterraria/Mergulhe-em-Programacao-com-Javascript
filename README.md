01. Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
```js
alert("Boas vindas ao nosso site!");
```
02. Declare uma variável chamada nome e atribua a ela o valor "Lua".
```js
let nome = "Lua";
```
03. Crie uma variável chamada idade e atribua a ela o valor 25.
```js
let idade = 25;
```
04. Defina uma variável numeroDeVendas e atribua a ela o valor 50.
```js
let numeroDeVendas = 50;
```
05. Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
```js
let saldoDisponivel = 1000;
```
06. Exiba um alerta com o texto "Erro! Preencha todos os campos"
```js
alert("Erro! Preencha todos os campos");
```
07. Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
```js
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);
```
08. Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená-lo em uma variável, pode chamá-la de nome ou adicionar o que desejar .
```js
let nomeUsuario = prompt("Insira seu nome: ");
```
09. Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idadeUsuario.
```js
let idadeUsuario = prompt("Insira sua idade: ");
```
10. Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
```js
if(idadeUsuario >= 18){
    alert("Pode tirar habilitação!");
}
```
11. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
```js
let diaSemana = prompt("Qual é o dia da semana?");

if(diaSemana === 'Sábado' || diaSemana === 'Domingo'){
    console.log("Bom fim de semana!")
}else{
    console.log("Boa semana!");
}
```

12. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
```js
let numero = prompt("Insira um número: ");

if(numero >= 0 && numero.length > 0){
    console.log("O número é positivo.");
}else if(numero < 0 && numero.length > 0){
    console.log("O número é negativo.");
}else{
    console.log("Isso definitavamente não é um número.");
}
```

13. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
```js
let pontuacao = 120;

if(pontuacao >= 100){
    console.log("Parabéns, você venceu!");
}else{
    console.log("Tente novamente para ganhar.");
}
```   

14. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
```js
let saldo = 1000;
console.log(`O valor do saldo é R$ ${saldo}`);
```

15. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
```js
let nome = prompt("Insira seu nome:");

alert(`Boas vindas, ${nome}`);
```

16. Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
```js
let contador = 1;

while (contador <= 10){
    console.log(contador);
    contador++;
}
```

17. Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
```js
let contador = 10;

while (contador >= 0){
    console.log(contador);
    contador--;
}
```

18. Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
```js
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
```

19. Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
```js
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
```



