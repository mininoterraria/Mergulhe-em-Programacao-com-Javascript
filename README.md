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
20. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
```js
console.log("Boas vindas!");
```
21. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
```js
let nome = 'Diego';
console.log(`Olá, ${nome}`);
```
22. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
```js
let nome = 'Diego';
alert(`Olá, ${nome}`);
```
23. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

```js
const resposta = prompt("Qual linguagem de programação você mais gosta?").toLowerCase();

const respostasValidas = ['Javascript','TypeScript','Java','Python','Ruby','C','C++','C#'];

let respostaNãoEncontrada = true;

for (let i = 0; i < respostasValidas.length;i++){
    if(resposta === respostasValidas[i].toLowerCase()){
        console.log(`Sua linguagem de programação favorita é: ${resposta}`);
        respostaNãoEncontrada = false;
        break;
    }
}

if(respostaNãoEncontrada){
    console.log("Sinto muito, essa linguagem não existe! :(");
}
```
24. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
```js
let valor1 = 5;
let valor2 = 3;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);
```

25. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
```js
let valor1 = 5;
let valor2 = 3;
let resultado = valor1 - valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);
```

26. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
```js
let idade = prompt("Insira sua idade: ");
idade = Number(idade);
const regex = /^[0-9]+$/;

if(isNaN(idade)){
    console.log("Amigo, isso definitivamente não é um número!");
}else{
    if(idade % 1 !== 0 && idade < 0){
        console.log("Números decimais negativos não são aceitos!");
    }else if(idade < 0){
        console.log("Números negativos não são aceitos!");
    }else if(idade % 1 !== 0){
        console.log("Números decimais não são aceitos!");
    }else{
        if(idade < 18){
            console.log("É menor de idade!");
        }else{
            console.log("É maior de idade!");
        }
    }
}
```
27. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
```js
let numero = prompt("Insira qualquer número: ");
const regex = /^-?[0-9]+([.,][0-9]+)?$/;

if(!regex.test(numero)){
    console.log("Amigo, isso definitivamente não é um número!");
}else{
    numero = numero.replace(',', '.').trim();
    numero = Number(numero);

    if(numero < 0){
        console.log("É negativo.");
    }else if(numero === 0){
        console.log("É zero.");
    }else{
        console.log("É positivo");
    }
}
```
28. Use um loop while para imprimir os números de 1 a 10 no console.
```js
let contador = 1;

while(contador <= 10){
    console.log(contador);
    contador++;
}
```
29. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
```js
let nota = 7;

if(nota < 7){
    console.log("Reprovado");
}else{
    console.log("Aprovado");
}
```
30. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
```js
console.log(Math.random());
```
31. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
```js
console.log(Math.floor(Math.random() * 10)+ 1);
```
32. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
```js
console.log(Math.floor(Math.random() * 1000)+ 1);
```



