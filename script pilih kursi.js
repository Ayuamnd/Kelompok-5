const row = 10;
const cols = 8;
const hargakursi = 75000;
const seatsContainer = document.getElementById('seats');
const selectedSeatsdisplay = document.getElementById('hitung');
const totalharga = document.getElementById('total');
const bayar = document.getElementById('submit');
let Selectedseats = 0;

// membuat kursi di bagian row
for (let i = 0; i < row; i++ ){
    const row = document.createElement('div'); 
    row.classList.add('row');
// membuat kursi di bagian cols
    for (let j = 0; j < cols; j++ ){
        const seat = document.createElement('div');
        seat.classList.add('seat');
        row.appendChild(seat);
    }
    
        seatsContainer.appendChild(row);
}
// event listener untuk pemilihan kursi 

seatsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
    
    Selectedseats = document.querySelectorAll('.seat.selected').length;
    selectedSeatsdisplay.textContent = Selectedseats;
    totalharga.textContent = Selectedseats * hargakursi;
    } 
    
})
bayar.addEventListener("click", function() {
    if (Selectedseats === 0){
        alert("Silakan pilih kursi terlebih dahulu.");
        return;
        
    } else {
        window.location.replace('halaman bayar.html');
    }
    
});