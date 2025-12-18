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

const calculateTotalCart = (cart) => {

    let total = 0;

    cart.products.forEach(item => {
        const product = products.find(p => p.id === item.productId);
        if (product) {
            total += product.price * item.quantity;
        }
    })

    return total.toFixed(2);

}

const renderOrders = () => {
    root.innerHTML = '';
    
    carts.forEach(cart => {
        const total = calculateTotalCart(cart);
        let username = 'Stranger';
        let productsHTML = '';
        cart.products.forEach(item => {
                        const product = products.find(p => p.id === item.productId);
                        if (product) {
                            productsHTML += `<p><strong>${product.title}</strong> - ${product.price.toFixed(2)}$</p>
                                             <p><span>Quantity:</span> ${item.quantity}</p>
                                             <p>Total price: ${(product.price * item.quantity).toFixed(2)}$`
                        }
                    });
        const user = users.find(u => u.id === cart.userId);
        if (user) {
            username = user.username;
        }
        
        
        root.innerHTML += `
            <div class="order">
                <h2 class="username">User: <span>${username}</span></h2>
                <p class="userId">User ID: ${cart.userId}</p>
                <hr>
                <p>Total price: <strong>${total}$</strong></p>
                ${productsHTML}
            </div>
        `
    })
}


(async () => {
    await loadProducts();
    await loadCarts();
    await loadUsers();
    renderOrders();
})();