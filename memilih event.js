const items = document.querySelectorAll(".item");
items.forEach(function (item) {
  item.addEventListener("click", function (Even) {
    alert("Untuk mengikuti event ini silahkan klik tombol Ikuti Event");
  });
});

const butons = document.querySelectorAll(".button");
butons.forEach(function (buton) {
  buton.addEventListener("click", function (Even) {
    alert("Anda yakin memilih event ini ?");
  });
});

document.getElementById("1").addEventListener("click", function (event) {
  window.location.href="pilih kursi.html";
});

document.getElementById("2").addEventListener("click", function (event) {
  window.location.href="pilih kursi.html";
});

document.getElementById("3").addEventListener("click", function (event) {
  window.location.href="pilih kursi.html";
});
