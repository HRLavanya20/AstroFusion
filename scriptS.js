function donateOneRupee() {
    alert("Thank you for donating ₹1! Your contribution supports space technology.");
  }
  
  function donateCustomAmount() {
    const amount = document.getElementById("customAmount").value;
    if (amount && amount >= 2) {
      alert(`Thank you for donating ₹${amount}! Your generosity helps advance space technology.`);
    } else {
      alert("Please enter a valid amount (minimum ₹2).");
    }
  }
  