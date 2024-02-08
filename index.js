const perguntas = [
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar;",
        "let myVar;",
        "const myVar;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a saída do seguinte código?\nconsole.log(typeof [])",
      respostas: [
        "array",
        "object",
        "undefined",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método JavaScript é usado para remover o último elemento de um array e retornar esse elemento?",
      respostas: [
        "pop()",
        "shift()",
        "remove()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do seguinte código?\nconsole.log(2 + '2' - 2)",
      respostas: [
        "22",
        "0",
        "20",
      ],
      correta: 1
    },
    {
      pergunta: "Qual função JavaScript é usada para converter uma string em um número inteiro?",
      respostas: [
        "parseInt()",
        "parseFloat()",
        "toFixed()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador JavaScript é usado para atribuição?",
      respostas: [
        "=",
        "==",
        "===",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método JavaScript é usado para adicionar novos elementos ao final de um array e retornar o novo comprimento do array?",
      respostas: [
        "push()",
        "concat()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado da expressão (true && false) || (false && true)?",
      respostas: [
        "true",
        "false",
        "undefined",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método JavaScript é usado para juntar os elementos de um array em uma string?",
      respostas: [
        "join()",
        "concat()",
        "merge()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a sintaxe correta para comentários de uma única linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "/* Este é um comentário */",
        "<!-- Este é um comentário -->",
      ],
      correta: 0
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // Estrutura de repetição para pegar as perguntas
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    // Estrutura de repetição para pegar as alternativas
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange= (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    // apagando um item do templeta que não deveria aparecer
    quizItem.querySelector('dl dt').remove()
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }