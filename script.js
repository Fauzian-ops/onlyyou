function lanjut() {
  const nama = document.getElementById('namaInput').value;
  if (!nama) {
    alert("Masukin nama dulu dong 😢");
    return;
  }
  document.getElementById('halaman1').classList.add('hidden');
  document.getElementById('halaman2').classList.remove('hidden');
  document.getElementById('namaOutput').innerText = nama;
}
