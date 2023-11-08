// conexão com elementos HTML
// Encapsulando os elementos em uma variável

// Filtro de de pequisa
const filter = document.getElementById('filter');
// Formulário para add item
const form = document.getElementById(addForm);
// lista para reber novos itens adicionado
const list = document.getElementById('items');

filter.addEventListener('keyup',function (){
    alert('VI VOCÊ DIGITANDO...')
});

form.addEventListener('submit', function(){
    alert('ENVIADO COM SUCESSO!')
});

list.addEventListener('click', function(){
    alert('ITEM EXCLUIDO')
})