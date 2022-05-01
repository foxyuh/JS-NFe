const parent = document.querySelector('.tabela').addEventListener('change', function (event) {

    document
    .querySelectorAll('.tr-tbody')
    .forEach(element => 
        element.classList.remove('input-selecionado')
    );

    if (event.target.name == 'radio-tabela' && event.target.checked) {
        const parent = event.target.parentNode.parentNode
        parent.classList.add('input-selecionado')
    }
    
});
