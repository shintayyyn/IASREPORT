// Select all open buttons and popups
const openButtons = document.querySelectorAll('.openPopup');
const videoPopups = document.querySelectorAll('.videoPopup');
const closeButtons = document.querySelectorAll('.closePopup');

// Add event listeners for opening pop-ups
openButtons.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    videoPopups[index].style.display = 'flex';
  });
});

// Add event listeners for closing pop-ups
closeButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    videoPopups[index].style.display = 'none';
  });
});

// Close pop-up when clicking outside the video container
videoPopups.forEach((popup) => {
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
});
