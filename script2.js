// document.addEventListener("DOMContentLoaded", function() {
//     var busSeats = document.getElementById("bus-seats");

//     // বাসের ৪০ টি সিট তৈরি করুন
//     for (var i = 1; i <= 40; i++) {
//         var seat = document.createElement("div");
//         seat.className = "seat";
//         seat.textContent = i;
//         busSeats.appendChild(seat);
//     }
// });
let score = 0;
function increaseScore() {
    seat += 1; // যেহেতু স্কোর ১ বাড়াবে, তাই ১ যোগ করা হলো
    displayScore();
}

function displayScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = seat;
}
