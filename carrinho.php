<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrinho de Compras</title>
    <link rel="stylesheet" href="./carrinho.css">
</head>
<body>
    <div class="product-container">
        <div class="product-image">
            <img id="main-image" src="./src/img/iphone15rosa.png" alt="Produto">
        </div>
        <div class="product-details">
            <h1>Apple iPhone 15 de 128GB </h1>
            <p class="price">Preço: R$ 4.849,00</p>
            <p>Você economiza: R$ 2.450,00 (-34%)</p>
            <button id="add-to-cart">Adicionar ao carrinho</button>
        </div>
        <div class="product-thumbnails">
            <img src="./src/img/iphone15plus.png" alt="Miniatura 1" class="thumbnail">
            <img src="./src/img/iphoneRosaPlus15.png" alt="Miniatura 2" class="thumbnail">
            <img src="./src/img/iphone15promax.png" alt="Miniatura 3" class="thumbnail">
        </div>
    </div>

    <div class="cart-container">
        <h2>Carrinho de Compras</h2>
        <ul id="cart-items"></ul>
        <button id="checkout">Finalizar a compra</button>
    </div>

    <script src="./script.js"></script>
</body>
</html>