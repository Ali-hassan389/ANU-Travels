document.addEventListener("DOMContentLoaded", function() {

    const bookingButton = document.querySelector(".booking-button");
    if (bookingButton) {
        bookingButton.addEventListener("click", function (event) {

            event.preventDefault(); 
            
        
            const name = document.getElementById("name").value;
            const age = document.getElementById("age").value;
            const phone = document.getElementById("phone").value;
            const email = document.getElementById("email").value;
            const packageValue = document.getElementById("package").value;
            const ticket=document.getElementById("tickets").value; 
            const departureDate = document.getElementById("departureDate").value;
        
            
            if (!name) {
                alert("Please fill in your full name.");
                return;
            }
            if(!age){
                 alert(" Please enter your age")
                 return;
            }
            if (parseInt(age) < 18) { 
                alert("You must be at least 18 years of age");
                return;
            }
            if(!phone){
                alert("Enter your phone number")
                return;
            }
            if(!email){
                alert("Enter your email")
                return;
            }
            if(!packageValue){
                alert("Choose a Package")
                return;
            }
            if(!ticket){
                alert("Enter no of tickets")
                return;
            }
            if(ticket>5 ){
                alert("Maximium number of tickets per person is 5")
                return;
            }
            if(!departureDate){
                alert("Enter a Departure Date")
                return;
            }

            alert("Booking details captured! (Name: " + name + ", Age: " + age + ")"); 
        });
    }
});