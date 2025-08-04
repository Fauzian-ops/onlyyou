function lanjutUlangTahun() {
  const nama = document.getElementById('nama').value.trim();
  if (!nama) {
    alert('Heii masukin nama dulu dongg 😘');
    return;
  }
  document.getElementById('page1').classList.add('hidden');
  document.getElementById('page2').classList.remove('hidden');
  document.getElementById('namaKamu').textContent = nama;
  document.getElementById('ucapan').textContent = `Selamat Ulang Tahun, ${nama} 🎀`;
}
