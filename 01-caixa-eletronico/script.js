alert('Atenção! Este site é apenas uma simulação de Caixa Eletrônico. Estamos em fase de testes 🚀');

function calcularSaque() {
     let saque = Number(document.querySelector('#idsaque').value)
     const notas = [100, 50, 20, 10, 5]
     const quantNotas = {}

     for(let nota of notas) {
          if (saque === 0) {break}

          let divisao = Math.floor(saque / nota)
          if (divisao >= 1) {
               quantNotas['n' + nota] = divisao
               saque -= nota * divisao
          }
     }
     return quantNotas
}

function processarDados() {
     const valor = document.querySelector('#idsaque').value 
     let resultado = document.querySelector('.msg h2').innerHTML = `Saque de R$${valor} realizado`
     let arrNotas = calcularSaque()
     let divQuantNotas = document.querySelector('.cedulas-quantidade').children

     // Distribuicao da quant de notas nas divs
     Array.from(divQuantNotas).forEach((div) => {
          let indexNota = div.getAttribute('data-index')
          if(arrNotas[indexNota] === undefined) {
               div.textContent = '-'
          } else {
               div.textContent = 'x'+ arrNotas[indexNota]
          }
     });
}