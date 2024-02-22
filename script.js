// modal handling
     
      var openModalBtn = document.getElementById("modal");
      var modalBtn = document.getElementById("open-modal-btn");
      var closeBtn = document.getElementsByClassName("continue")[0];

      function openModal() {
        openModalBtn.style.display = "block";
      }
    
      function closeModal() {
        openModalBtn.style.display = "none";
     }
        window.onclick = function(event) {
          if (event.target == openModalBtn) {
            openModalBtn.style.display = "none";
      }
    }



const allSeat = document.getElementsByClassName('seat');
  const className = 'Economy';
   const seatPrice = 550; 
   
        //update seat number 
  let count = 0 ;
   for (const seats of allSeat) {
      seats.addEventListener( 'click' , function(event){
       count = count + 1 ;
        setInnerText("seat-count", count);
        
       const seatName1 = event.target.parentNode.childNodes[3].innerText;
        const selectSeatDetails = document.getElementById("select_seat_details");
        const selectClassDetails = document.getElementById("select_class_details");
        const selectPriceDetails = document.getElementById("select_price_details");
         
        // remainingSeats count 

        event.target.setAttribute("disabled", false);
        

       const firstSeatCount = getConvertedValue("seat-count");
       const secondSeatCount = getConvertedValue("remaining-seats");

        if (firstSeatCount + 1 > 5 || secondSeatCount -1 < 0) {
          alert("You can select maximum 4 seats at a time!");
          return;
        }
        event.target.parentNode.childNodes[3].style.backgroundColor = "#1DD100";

        const remainingSeatsNumber = getConvertedValue("remaining-seats")
          document.getElementById("remaining-seats").innerText = remainingSeatsNumber - 1;

        
        const h2 = document.createElement("li");
         const h4 = document.createElement("li");
         const h5 = document.createElement("li");

         const p1 = document.createElement("p");
          p1.innerText = seatName1 ; 

         const p2 = document.createElement("li");
          p2.innerText = className ; 

         const p3 = document.createElement("li");
          p3.innerText = seatPrice ;

          h2.appendChild(p1);
          h4.appendChild(p2);
          h5.appendChild(p3);
          selectSeatDetails.appendChild(h2);
          selectClassDetails.appendChild(h4);
          selectPriceDetails.appendChild(h5);
          updateTotalCost(seatPrice);
          updateGrandTotal();
    });
}

function setInnerText(id , value){
  document.getElementById(id).innerText = value ;
}
function updateGrandTotal(status){
  const totalAmount = getConvertedValue("total-cost");
    if (status === undefined) {
      document.getElementById("grand-total").innerText = totalAmount;
    }
    else{
       const couponCode = document.getElementById("coupon-code").value;
       if (couponCode === "NEW15") {
        const discount20 = totalAmount * 0.2;
        document.getElementById("grand-total").innerText
            = totalAmount - discount20 ;
       } else if(couponCode === "Couple 20") {
        const discount15 = totalAmount * 0.15;
          document.getElementById("grand-total").innerText
            = totalAmount - discount15 ;
       }
       else{
        alert("Please enter a valid coupon code");
       }
    }

  
   
}

function updateTotalCost(seatPrice){
  const totalAmount = getConvertedValue("total-cost");
  const sum = totalAmount + parseInt(seatPrice);
  document.getElementById("total-cost").innerText = sum ;
  
}

function getConvertedValue(id){
  const totalSeat = document.getElementById(id).innerText;
  const convertedPrice = parseInt(totalSeat);
  return convertedPrice ;
}

