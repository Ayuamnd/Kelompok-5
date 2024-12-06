// const namalengkap = document.getElementById("nama");
// const nomorhp = document.getElementById("nohp");

// const daftar = document.getElementById("submit");
// daftar.addEventListener("click", function () {
//   if (namalengkap && nomorhp) {
//     window.location.href = "Memilih Event.html";
//   } else {
//     alert("Silahkan isi data terlebih dahulu");
//   }
// });


function redirectToNextPage() {
    const namapanjang = document.getElementById('nama').value;
    const nomorhp = document.getElementById('nohp').value;

    if (namapanjang && nomorhp) {
        // Simpan data ke localStorage (opsional)
        localStorage.setItem('nama', namapanjang);
        localStorage.setItem('nohp', nomorhp);

        // Pindah ke halaman berikutnya
        window.location.href = 'Memilih Event.html';
    } else {
        alert('Harap isi semua kolom.');
    }};