precosLivros = 
[{titulo: "JavaScript",
    preco: 25},
{titulo: "PHP",
    preco: 15},  
{titulo: "Java",
    preco: 30},  
{titulo: "Elixir",
    preco: 50},
{titulo: "Go",
    preco: 45},
{titulo: "Python",
    preco:  20}];

const livros = precosLivros;

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;

    for(let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    }
    return maisBarato;
}

for(let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

console.log(livros);