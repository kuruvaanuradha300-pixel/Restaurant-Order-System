let foods = [
  { name: "Burger", price: 120, img: "https://png.pngtree.com/png-clipart/20241108/original/pngtree-delicious-and-testy-cheese-burger-png-image_16763714.png" },
  { name: "Pizza", price: 250, img: "https://b.zmtcdn.com/data/pictures/chains/3/900403/ce0341e58cf96f163101b4dff77ed938.jpg?fit=around|960:500&crop=960:500;*,*" },
  { name: "Fries", price: 100, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwABqay1xzqUMMtesTe8WAesrw7emXVVUIQ&s" },
  { name: "Sandwich", price: 150, img: "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2025-09/Subway%20Revamps%20Fresh%20Fit%20Menu%20with%20Protein-Rich%20Sandwiches%20Under%20500%20Calories.jpg" },
  { name: "Cold Drink", price: 80, img: "https://5.imimg.com/data5/TO/XJ/QN/ANDROID-80650971/product-jpeg-500x500.jpg" },
  { name: "Biryani", price: 200, img: "https://b.zmtcdn.com/data/pictures/2/21750762/98a770adddaa9142adb1841c22eca8af_o2_featured_v2.jpg" },
  { name: "Noodles", price: 180, img: "https://content.jdmagicbox.com/quickquotes/images_main/egg-noodles-in-a-can-802737750-f4wvuaov.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit" },
  { name: "Pasta", price: 220, img: "https://www.thevellorekitchen.in/wp-content/uploads/2023/01/PINK-PASTA-CHICKEN.jpg" },
  { name: "Ice Cream", price: 90, img: "https://dukaan.b-cdn.net/700x700/webp/projecteagle/images/0e2c3b7f-16b9-4a82-a98c-907bd20e6aea.jpg" },
  { name: "Cake", price: 300, img: "https://www.fnp.com/images/pr/l/v20221205202813/cream-drop-chocolate-cake_1.jpg" }
];

let cart = [];

// show foods
function showFoods() {
  let text = "";

  foods.forEach((f, i) => {
    text += `
      <div class="card">
        <img src="${f.img}">
        <h3>${f.name}</h3>
        <p class="price">₹${f.price}</p>
        <button onclick="add(${i})">Add</button>
      </div>
    `;
  });

  document.getElementById("foods").innerHTML = text;
}

// add to cart
function add(i) {
  let item = foods[i];

  let found = cart.find(f => f.name === item.name);

  if (found) {
    found.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  updateCount();
}

// open cart
function openCart() {
  document.getElementById("cart").classList.remove("hide");
  showCart();
}

// close cart
function closeCart() {
  document.getElementById("cart").classList.add("hide");
}

// show cart
function showCart() {
  let text = "";
  let total = 0;

  cart.forEach((item, i) => {
    let itemTotal = item.price * item.qty;
    total += itemTotal;

    text += `
      <p><b>${item.name}</b></p>
      <p>₹${item.price} × ${item.qty}</p>
      <p>Total: ₹${itemTotal}</p>

      <button onclick="inc(${i})">+</button>
      <button onclick="dec(${i})">-</button>
      <button onclick="remove(${i})">Remove</button>
      <hr>
    `;
  });

  text += `<h3>Total Bill: ₹${total}</h3>`;

  document.getElementById("cartItems").innerHTML = text;
}

// increase
function inc(i) {
  cart[i].qty++;
  updateCount();
  showCart();
}

// decrease
function dec(i) {
  if (cart[i].qty > 1) {
    cart[i].qty--;
  } else {
    cart.splice(i, 1);
  }
  updateCount();
  showCart();
}

// remove
function remove(i) {
  cart.splice(i, 1);
  updateCount();
  showCart();
}

// update count
function updateCount() {
  let count = 0;
  cart.forEach(item => count += item.qty);
  document.getElementById("count").innerText = count;
}

showFoods();