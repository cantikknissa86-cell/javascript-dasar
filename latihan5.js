const cart = [
  {
    name: "Mouse",
    price: 120000,
    qty: 2
  },
  {
    name: "Keyboard",
    price: 250000,
    qty: 1
  },
  {
    name: "Flashdisk",
    price: 90000,
    qty: 3
  }
];

let totalBelanja = 0;

for (let i = 0; i < cart.length; i++) {
  let subtotal = cart[i].price * cart[i].qty;

  console.log(cart[i].name);
  console.log(cart[i].price + " x " + cart[i].qty + " = " + subtotal);
  console.log("");

  totalBelanja += subtotal;
}

let diskon = 0;

if (totalBelanja > 500000) {
  diskon = totalBelanja * 0.1;
}

let totalBayar = totalBelanja - diskon;

console.log("----------------------");
console