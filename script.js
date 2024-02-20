// let seatCount = 0;
// const totalSeats = 40;
// const maxSelection = 4;

// // Create bus seats
// const busTable = document.getElementById('busTable');
// for (let i = 1; i <= 10; i++) {
//     const row = document.createElement('tr');
//     for (let j = 1; j <= 4; j++) {
//         const seat = document.createElement('td');
//         seat.textContent = String.fromCharCode(64 + j) + i;
//         seat.addEventListener('click', function() {
//             if (!seat.classList.contains('selected')) {
//                 if (seatCount < maxSelection) {
//                     seat.classList.add('selected');
//                     seatCount++;
//                 } else {
//                     alert('You can not select seat more!');
//                 }
//             } else {
//                 seat.classList.remove('selected');
//                 seatCount--;
//             }
//             document.getElementById('seatCount').textContent = seatCount;
//         });
//         row.appendChild(seat);
//     }
//     busTable.appendChild(row);
// }
// function calculateGrandTotal(discount){
//     const new15 = 'NEW15';
//     const couple20 = 'Couple 20';  

// }
// Seat count----

let selectedSeats = [];

// Generate seat buttons dynamically
const seatsContainer = document.getElementById('a1');
const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
for (let row of rows) {
    for (let i = 1; i <= 4; i++) {
        const seatButton = document.createElement('button');
        seatButton.className = 'seat';
        seatButton.innerText = row + i;
        seatButton.onclick = function() {
            selectSeat(this);
        };
        seatsContainer.appendChild(seatButton);
    }
    seatsContainer.appendChild(document.createElement('br'));
  }
function selectSeat(seat) {
    if (!selectedSeats.includes(seat.innerText) && selectedSeats.length < 4) {
        seat.classList.add("selected-p");
        selectedSeats.push(seat.innerText);
        updateDisplay();
    }else{
        alert('You can not select set up to 4!');
    }
}

function updateDisplay() {
    document.getElementById("selectedSeat").innerHTML = selectedSeats.join("<br> <br>");
    document.getElementById("remainingSeats").innerText = 40 - selectedSeats.length;
    const ticketPrice = 'Per ' + 550;
    let totalAmount = selectedSeats.length * 550;
    document.getElementById('ticketPrice').innerText = ticketPrice ;
    document.getElementById("totalAmount").innerText = totalAmount ;
}

// modal handling
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementsByClassName('continue')[0];

openModalBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

