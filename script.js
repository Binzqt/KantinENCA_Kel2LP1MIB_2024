function increment(button) {
  const countElement = button.previousElementSibling;
  let count = parseInt(countElement.textContent, 10);
  count++;
  countElement.textContent = count;
}

function decrement(button) {
  const countElement = button.nextElementSibling;
  let count = parseInt(countElement.textContent, 10);
  if (count > 0) {
    // Menghindari nilai negatif
    count--;
    countElement.textContent = count;
  }
}

function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

const prices = {
  miayam: 10000,
  markari: 10000,
  migoreng: 8000,
  nasigoreng: 10000,
  mietumis: 10000,
  ayamgeprek: 10000,
  sosisbakso: 1000,
  jusbuah: 5000,
  cappucino: 5000,
  bengbeng: 5000,
  popice: 5000,
  nutrisari: 4000,
  milo: 5000,
  tehsisri: 2000,
  teajus: 2000,
};

// Function to increment the count
function increment(id) {
  const countElement = document.getElementById(id);
  let count = parseInt(countElement.textContent);
  count++;
  countElement.textContent = count;
  updateTotal(); // Update total harga after increment
}

// Function to decrement the count
function decrement(id) {
  const countElement = document.getElementById(id);
  let count = parseInt(countElement.textContent);
  if (count > 0) {
    count--;
    countElement.textContent = count;
  }
  updateTotal(); // Update total harga after decrement
}

// Function to calculate total price based on selected items
function updateTotal() {
  let total = 0;
  for (let item in prices) {
    const quantity = parseInt(document.getElementById(item).textContent);
    total += prices[item] * quantity;
  }
  document.getElementById("total-harga").textContent =
    "Rp " + total.toLocaleString(); // Display total price
}

// Function to submit the order and show total price
function submitOrder() {
  let orderDetails = "";
  let total = 0;

  for (let item in prices) {
    const quantity = parseInt(document.getElementById(item).textContent);
    if (quantity > 0) {
      orderDetails += `${
        item.charAt(0).toUpperCase() + item.slice(1)
      }: ${quantity} x Rp ${prices[item].toLocaleString()}<br>`;
      total += prices[item] * quantity;
    }
  }

  if (orderDetails !== "") {
    alert(
      "Pesanan Anda Telah Dikirim! Berikut detail pesanan Anda:\n\n" +
        orderDetails
    );
    // Update total price before alert
    document.getElementById(
      "total-harga"
    ).textContent = `Rp ${total.toLocaleString()}`;
  } else {
    alert("Anda belum memilih produk!");
  }
}

// Scroll to the bottom function
function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}
