const API_URL = "https://fakestoreapi.com";

// Products container
const store = document.querySelector('#store');

// Filters
const categoryFilter = document.querySelector('#categoryFilter');
const searchInput = document.querySelector('#searchInput');
const minPriceInput = document.querySelector('#minPrice');
const maxPriceInput = document.querySelector('#maxPrice');

// Sorting
const sortSelect = document.querySelector('#sortSelect');

// Modal elements
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('#closeModal');
const modalImg = document.querySelector('#modalImg');
const modalTitle = document.querySelector('#modalTitle');
const modalDesc = document.querySelector('#modalDesc');
const modalPrice = document.querySelector('#modalPrice');


let products = [];
let filteredProducts = [];


async function loadProducts() {
    const res = await fetch(`${API_URL}/products`);
    products = await res.json();

    filteredProducts = products;
    renderProducts(filteredProducts);
}

async function loadCategories() {
    const res = await fetch(`${API_URL}/products/categories`);
    const categories = await res.json();

    categories.forEach(c => {
        categoryFilter.innerHTML += `<option value="${c}">${c}</option>`;
    });
}


function applyFilters() {
    const category = categoryFilter.value;
    const search = searchInput.value.toLowerCase();
    const minPrice = Number(minPriceInput.value) || 0;
    const maxPrice = Number(maxPriceInput.value) || 10000;
    const sortType = sortSelect.value;

    filteredProducts = products.filter(p => {
        return (
            (!category || p.category === category) &&
            (p.title.toLowerCase().includes(search) || p.description.toLowerCase().includes(search)) &&
            p.price >= minPrice &&
            p.price <= maxPrice
        );
    });
    if (sortType === "price-asc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    }
    if (sortType === "price-desc") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }
    if (sortType === "title-asc") {
        filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortType === "title-desc") {
        filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
    }

    renderProducts(filteredProducts);
}


function renderProducts(list) {
    store.innerHTML = '';

    list.forEach(p => {

        const card = document.createElement('div');
        card.classList.add('card');
        
        card.innerHTML = `
            <img src="${p.image}" alt="${p.title}">
            <h4>${p.title}</h4>
            <p>${p.price.toFixed(2)} $</p>
        `;

        card.addEventListener('click',() => openModal(p));

        store.appendChild(card);

    })
}

function openModal(product) {
    modalImg.src = product.image;
    modalTitle.innerText = product.title;
    modalDesc.innerText = product.description;
    modalPrice.innerText = product.price + " $";

    modal.classList.remove('hidden');
}

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
})

categoryFilter.addEventListener('change', applyFilters);
searchInput.addEventListener('input', applyFilters);
minPriceInput.addEventListener('input', applyFilters);
maxPriceInput.addEventListener('input', applyFilters);
sortSelect.addEventListener('change', applyFilters);


(async function init() {
    await loadProducts();
    await loadCategories();
})();