function loadNavbar(){
document.getElementById("navbar").innerHTML=`<header><h2>Avengers</h2><nav>
<a href='index.html'>Home</a><a href='men.html'>Men</a><a href='women.html'>Women</a>
<a href='categories.html'>Brand's</a><a href='cart.html'>Cart (<span id='cartCount'>0</span>)</a>
</nav></header>`;
updateCartCount();}

loadNavbar();

function loadProducts(type) {
    const list = document.getElementById("productList");

    // Clear previous cards
    list.innerHTML = '';

    // Filter by gender (men / women)
    const filtered = products.filter(p => p.gender === type);

    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product';

        const img = document.createElement('img');
        img.src = p.image_link;

        const brand = document.createElement('p');
        brand.className = "brand";
        brand.textContent = p.brand;

        const name = document.createElement('h4');
        name.textContent = p.name;

        const price = document.createElement('p');
        price.className = "price";
        price.textContent = "₹" + p.price;

        const btn = document.createElement('button');
        btn.textContent = "Add to Cart";
        btn.onclick = () => addToCart(p.id);

        card.appendChild(img);
        card.appendChild(brand);
        card.appendChild(name);
        card.appendChild(price);
        card.appendChild(btn);

        list.appendChild(card);
    });
}


function getCart(){
    return JSON.parse(localStorage.getItem('cart') || '[]');
}

function saveCart(cartArray){
    localStorage.setItem('cart', JSON.stringify(cartArray));
    console.log("Cart saved:", cartArray); // prints the array after saving
}


function addToCart(id){
    let cart = getCart();
    if(!cart.includes(id)){          // prevent duplicates
        cart.push(id);               // add product id
        saveCart(cart);              // save updated cart
        updateCartCount();           // update navbar counter
        alert('Product added to cart!');
    } else {
        alert('Product already in cart!');
    }
}

function updateCartCount(){let c=getCart();document.querySelectorAll("#cartCount").forEach(e=>e.innerText=c.length);}

function addToWishlist(id){
let w=JSON.parse(localStorage.getItem('wishlist')||'[]');
if(!w.includes(id)) w.push(id);
localStorage.setItem('wishlist',JSON.stringify(w));
}

const form=document.getElementById("checkoutForm");
if(form){form.addEventListener('submit',e=>{
e.preventDefault();localStorage.setItem('order',Date.now());
localStorage.setItem('cart','[]');alert('Order Placed!');location.href='orders.html';
});}


function loadBrandpProducts(brandName) {
    const list = document.getElementById("productList");
    list.innerHTML = "";

    // Filter products by brand name
    const filtered = products.filter(p => p.brand.toLowerCase() === brandName.toLowerCase());

    // If no products found
    if (filtered.length === 0) {
        list.innerHTML = "<p>No products found for this brand.</p>";
        return;
    }

    // Create product cards
    filtered.forEach(p => {
        const card = document.createElement("div");
        card.className = "product";

        card.innerHTML = `
            <img src="${p.image_link}">
            <p class="brand">${p.brand}</p>
            <h4>${p.name}</h4>
            <p class="price">₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        `;

        list.appendChild(card);
    });
}







