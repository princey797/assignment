// Get the elements
const reviewBtn = document.getElementById('reviewBtn');
const reviewPopup = document.getElementById('reviewPopup');
const closeBtn = document.getElementById('closeBtn');
const reviewForm = document.getElementById('reviewForm');

// Show the popup when the button is clicked
reviewBtn.onclick = function() {
    reviewPopup.style.display = 'flex'; // Show the popup
};

// Close the popup when the close button is clicked
closeBtn.onclick = function() {
    reviewPopup.style.display = 'none'; // Hide the popup
};

// Close the popup when clicked outside of the popup content
window.onclick = function(event) {
    if (event.target === reviewPopup) {
        reviewPopup.style.display = 'none'; // Hide the popup
    }
};

// Handle form submission
reviewForm.onsubmit = function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
    const rating = document.getElementById('rating').value;

    console.log(`Name: ${name}`);
    console.log(`Review: ${review}`);
    console.log(`Rating: ${rating}`);

    // Close the popup after submission
    reviewPopup.style.display = 'none';

    // Optionally, show a confirmation message
    alert('Thank you for your review!');
};
