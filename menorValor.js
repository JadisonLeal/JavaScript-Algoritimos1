const livros = require('./listaLivros');

// const precosLivros = [25, 15, 30, 50, 45, 20];
// let maisBarato = 0;

// for(let atual = 0; atual < precosLivros.length; atual++) {
//     if(precosLivros[atual] < precosLivros[maisBarato]) {
//         maisBarato = atual;
//     }
// };

// console.log(precosLivros[maisBarato]);


function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;

    for(let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    }
    return maisBarato;
}

module.exports = menorValor;