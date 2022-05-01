document.querySelector('.tabela').addEventListener('change', function (event) {

    document
    .querySelectorAll('.tr')
    .forEach(element => 
        element.classList.remove('produto-selecionado')
    );

    if (event.target.name == 'radio-tabela' && event.target.checked) {
        const parent = event.target.parentNode.parentNode
        parent.classList.add('produto-selecionado')
    }

})