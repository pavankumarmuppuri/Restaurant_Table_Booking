function submitBooking() {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const tableSize = document.getElementById('tableSize').value;
  
    const confirmationDiv = document.getElementById('confirmation');
    confirmationDiv.innerHTML = `Booking confirmed for ${name} on ${date} at ${time} for ${tableSize} people.`;
  }
  