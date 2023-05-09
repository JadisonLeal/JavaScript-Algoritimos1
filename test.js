precosLivros = 
[{
    titulo: "JavaScript",
    preco: 25
}, 
    {titulo: "PHP",
    preco: 15
}, 
    {titulo: "Java",
    preco: 30
}, 
    {titulo: "Elixir",
    preco: 50
}, 
    {titulo: "Go",
    preco: 45
}, 
    {titulo: "Python",
    preco: 20
}];

const livros = precosLivros;

function insertionSort(lista) {
    for(let atual = 0; atual < lista.length; atual++) {
        const analise = atual;
        while(analise > 0 && lista[analise].preco < lista[analise-1].preco) {
            const itemAtual = lista[analise];
            const itemAnterior = lista[analise-1];

            lista[analise] = itemAnterior;
            lista[analise-1] = itemAtual;
        }
    }
    console.log(lista);
}

insertionSort(livros);