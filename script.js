function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight, // Scroll ke bagian paling bawah
    behavior: "smooth", // Smooth scrolling
  });
}
const prices = {
  miayam: 10000,
  markari: 10000,
  migoreng: 8000,
  nasigoreng: 10000,
  mietumis: 10000,
  ayamgeprek: 10000,
  sosisbakso: 1000,
  esjeruk: 5000,
  cappucino: 5000,
  bengbeng: 5000,
  popice: 5000,
  nutrisari: 4000,
  milo: 5000,
  tehsisri: 2000,
  teajus: 2000,
  jusmangga: 5000,
  jusnaga: 5000,
  jusapel: 5000,
  juspir: 5000,
  jusalpukat: 5000,
};

// Function to increment the count
function increment(id) {
  const countElement = document.getElementById(id);
  let count = parseInt(countElement.textContent, 10);
  count++;
  countElement.textContent = count;
  updateTotal(); // Update total price
}

// Function to decrement the count
function decrement(id) {
  const countElement = document.getElementById(id);
  let count = parseInt(countElement.textContent, 10);
  if (count > 0) {
    count--;
    countElement.textContent = count;
  }
  updateTotal(); // Update total price
}

// Function to calculate total price
function updateTotal() {
  let total = 0;
  for (let item in prices) {
    const quantity = parseInt(document.getElementById(item).textContent, 10);
    total += prices[item] * quantity;
  }
  document.getElementById("total-harga").textContent =
    "Rp " + total.toLocaleString();
}

// Function to reset order
function resetOrder() {
  const counts = document.querySelectorAll(".count");
  counts.forEach((count) => {
    count.textContent = "0";
  });
  document.getElementById("total-harga").textContent = "Rp 0";
  document.getElementById("catatanPembeli").value = "";
  document.getElementById("output").innerText = "";
}

// Function to submit the order
function submitOrder() {
  let orderDetails = "";
  let total = 0;

  for (let item in prices) {
    const quantity = parseInt(document.getElementById(item).textContent, 10);
    if (quantity > 0) {
      orderDetails += `${
        item.charAt(0).toUpperCase() + item.slice(1)
      }: ${quantity} x Rp ${prices[item].toLocaleString()}<br>`;
      total += prices[item] * quantity;
    }
  }

  const catatan = document.getElementById("catatanPembeli").value.trim();
  if (!catatan) {
    alert("Mohon isi catatan sebelum memesan.");
    return;
  }

  if (orderDetails) {
    document.getElementById(
      "output"
    ).innerHTML = `<h3>Pesanan Anda:</h3>${orderDetails}<br><strong>Total: Rp ${total.toLocaleString()}</strong><br><strong>Catatan:</strong> ${catatan}`;
    alert("Pesanan Anda telah berhasil dikirim!");
  } else {
    alert("Anda belum memilih produk!");
  }
}

function submitOrder() {
  let orderDetails = "";
  let total = 0;

  // Mengambil pilihan pengantaran
  const deliveryOption = document.getElementById("deliveryOption").value;

  // Menghitung total pesanan
  for (let item in prices) {
    const quantity = parseInt(document.getElementById(item).textContent, 10);
    if (quantity > 0) {
      orderDetails += `${
        item.charAt(0).toUpperCase() + item.slice(1)
      }: ${quantity} x Rp ${prices[item].toLocaleString()}<br>`;
      total += prices[item] * quantity;
    }
  }

  // Mengambil catatan dari textarea (jika ada)
  const catatan =
    document.getElementById("catatanPembeli")?.value.trim() ||
    "Tidak ada catatan";

  // Menampilkan struk pesanan
  if (orderDetails) {
    const output = document.getElementById("output");
    output.style.display = "block";
    output.innerHTML = `<h3>Pesanan Anda:</h3>${orderDetails}<strong>Total: Rp ${total.toLocaleString()}</strong><strong>Catatan:</strong> ${catatan}<strong>Pengantaran:</strong> ${
      deliveryOption === "makan_di_tempat" ? "Makan di Tempat" : "Anter ke Lobi"
    }`;
    alert("Pesanan Anda telah berhasil dikirim!");
  } else {
    alert("Anda belum memilih produk!");
  }
}

