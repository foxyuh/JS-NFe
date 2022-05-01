document.querySelector('.tabela').addEventListener('change', function (event) {
    const evento = event.target;
    document
        .querySelectorAll('.tr-tbody')
        .forEach(element => element.classList.remove('tr-activate'));
    if (evento.name == 'radio-tabela' && evento.checked) {
        const parent = evento.parentNode.parentNode;
        parent.classList.add('tr-activate');
    }
});
