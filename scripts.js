 let valorCompra = parseFloat(prompt('Digite o valor de compra do produto:'));

    let valorVenda;

    if (valorCompra < 20) {

        valorVenda = (valorCompra * 0.45) + valorCompra; 

    } else {

        valorVenda = (valorCompra * 0.30) + valorCompra;
    }
    alert("Sua compra ficou no valor de: "+ valorVenda)
