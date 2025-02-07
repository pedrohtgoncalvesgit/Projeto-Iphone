document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const addToCartButton = document.getElementById('add-to-cart');
    const cartItems = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout');

    
 // Manipula o clique da miniatura para alterar a imagem principal
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src;
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            thumbnail.classList.add('active');
        });
    });

   // Processa o clique do botão adicionar ao carrinho
    addToCartButton.addEventListener('click', () => {
        const productName = document.querySelector('.product-details h1').innerText;
        const productPrice = document.querySelector('.price').innerText;
        const productImageSrc = mainImage.src;

        // Cria item do carrinho
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <div class="item-details">
                <img src="${productImageSrc}" alt="Produto">
                <span>${productName} - ${productPrice}</span>
            </div>
            <span class="remove-item">Remover</span>
        `;

        //Adiciona funcionalidade de remoção de item
        cartItem.querySelector('.remove-item').addEventListener('click', () => {
            cartItem.remove();
            if (cartItems.children.length === 0) {
                checkoutButton.style.display = 'none';
            }
        });

       //Anexar itens ao carrinho
        cartItems.appendChild(cartItem);

        
       //Mostra o botão de finalização da compra se houver itens no carrinho
        if (cartItems.children.length > 0) {
            checkoutButton.style.display = 'block';
        }
    });
});
