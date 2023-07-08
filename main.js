const form = document.getElementById('form');
const inputText = document.getElementById('name');
const inputNumber = document.getElementById('number');

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let linha = '<tr>';
    linha += `<td>${inputText.value}</td>`;
    linha += `<td>${inputNumber.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const bodyTabela = document.querySelector('tbody'); 
    bodyTabela.innerHTML = linhas;

    inputText.value = '';
    inputNumber.value = '';

});