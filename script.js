// Fungsi untuk scroll ke bagian bawah halaman
function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}

const prices = {
  mie_Ayam: 10000,
  martabak_Kari: 10000,
  mie_Goreng: 8000,
  nasi_Goreng: 10000,
  mie_Tumis: 10000,
  nasi_AyamGeprek: 10000,
  sosis_Bakso: 1000,
  es_Jeruk: 5000,
  cappucino: 5000,
  bengbeng: 5000,
  pop_Ice: 5000,
  nutrisari: 4000,
  milo: 5000,
  teh_Sisri: 2000,
  teajus: 2000,
  jus_Mangga: 5000,
  jus_BuahNaga: 5000,
  jus_Apel: 5000,
  jus_Alpukat: 5000,
};

function increment(id) {
  const countElement = document.getElementById(id);
  let count = parseInt(countElement.textContent, 10);
  count++;
  countElement.textContent = count;
  updateTotal();
}

function decrement(id) {
  const countElement = document.getElementById(id);
  let count = parseInt(countElement.textContent, 10);
  if (count > 0) {
    count--;
    countElement.textContent = count;
  }
  updateTotal();
}

function updateTotal() {
  let total = 0;
  for (let item in prices) {
    const quantity =
      parseInt(document.getElementById(item).textContent, 10) || 0;
    total += prices[item] * quantity;
  }
  document.getElementById("total-harga").textContent =
    "Rp " + total.toLocaleString();
}

function resetOrder() {
  const counts = document.querySelectorAll(".count");
  counts.forEach((count) => {
    count.textContent = "0";
  });
  document.getElementById("total-harga").textContent = "Rp 0";
  document.getElementById("catatanPembeli").value = "";
  document.getElementById("output").innerText = "";
}

function submitOrder() {
  let orderDetails = "";
  let total = 0;

  for (let item in prices) {
    const quantity =
      parseInt(document.getElementById(item).textContent, 10) || 0;
    if (quantity > 0) {
      orderDetails += `${
        item.charAt(0).toUpperCase() + item.slice(1)
      }: ${quantity} x Rp ${prices[item].toLocaleString()}<br>`;
      total += prices[item] * quantity;
    }
  }

  const namaPembeli = document.getElementById("inputText")?.value.trim();
  const catatan =
    document.getElementById("catatanPembeli")?.value.trim() ||
    "Tidak ada catatan";
  const deliveryOption =
    document.getElementById("deliveryOption")?.value || "makan_di_tempat";

  if (!namaPembeli) {
    alert("Nama pembeli tidak boleh kosong!");
    return;
  }

  if (orderDetails) {
    const output = document.getElementById("output");
    output.style.display = "block";
    output.innerHTML = `
      <h3>Pesanan Anda:</h3>
      ${orderDetails}
      <p><strong>Nama Pembeli:</strong> ${namaPembeli}</p>
      <strong>Catatan:</strong> ${catatan}<br>
      <strong>Pengantaran:</strong> ${
        deliveryOption === "makan_di_tempat"
          ? "Makan di Tempat"
          : "Anter ke Lobi"
      }
      <strong>Total: Rp ${total.toLocaleString()}</strong>
      <p class="struk">
        *Silakan mengirimkan struk ini ke nomor +6288286291706 di bagian contact.
      </p>`;
    alert("Pesanan Anda telah berhasil dikirim!");
  } else {
    alert("Anda belum memilih produk!");
  }
}
