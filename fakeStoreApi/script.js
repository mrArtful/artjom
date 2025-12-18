const API_URL = 'https://fakestoreapi.com';

const root = document.querySelector('#root');

let products = [];
let carts = [];
let users = [];

const loadProducts = async () => {

    const res = await fetch(`${API_URL}/products`);
    products = await res.json();

}

const loadCarts = async () => {

    const res = await fetch(`${API_URL}/carts`);
    carts = await res.json();

}

const loadUsers = async () => {

    const res = await fetch(`${API_URL}/users`);
    users = await res.json();

}


const renderProducts = () => {
    root.innerHTML = '';

    // products.forEach(item => {
    //     root.innerHTML += `<h2>${item.title}</h2>
    //                        <h3>Price: <strong>${item.price.toFixed(2)}</strong></h3>`;
    // });

    // const newProducts = products.filter(item => item.id === 1);
    // newProducts.forEach(item => {
    //     root.innerHTML += `<h2>${item.title}</h2>
    //                        <h3>Price: <strong>${item.price.toFixed(2)}</strong></h3>`;
    // });

    // console.log(carts);
    
    carts.forEach(cart => {
        console.log(cart);
        let total = 0;
        let productHtml = '';
        cart.products.forEach(item => {
            const product = products.find(p => p.id === item.productId);
            if (product) {
                productHtml += `<p><strong>${product.title}</strong> - ${product.price.toFixed(2)}$</p>
                                <p>quantity - ${item.quantity} | total - ${(product.price * item.quantity).toFixed(2)}$</p>`
            }
            total += product.price * item.quantity;
        });

        const user = users.find(u => u.id === cart.userId);

        root.innerHTML += `
            <div class="order">
                <h2>${user.username} - ${user.email}</h2>
                <p>Order #${cart.id}</p>
                ${productHtml}
                <p>Total price: <strong>${total.toFixed(2)}$</strong></p>
            </div>
        `;
    })
}


(async () => {
    await loadProducts();
    await loadCarts();
    await loadUsers();
    renderProducts();
})();