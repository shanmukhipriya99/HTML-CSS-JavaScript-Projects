const btn = document.getElementById('btn');
const ratingEls = document.querySelectorAll('.rating');
const container = document.getElementById('container');
let selectedRating = '';

ratingEls.forEach((rating) => {
  rating.addEventListener('click', (event) => {
    removeActive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add('active');
    event.target.parentNode.classList.add('active');
  });
});

function removeActive() {
  ratingEls.forEach((rating) => {
    rating.classList.remove('active');
  });
}

btn.addEventListener('click', () => {
  if (selectedRating !== '') {
    container.innerHTML = `
    <strong>Thank you!</strong>
    <br>
    <br>
    <strong>Feedback: ${selectedRating} </strong>
    <p>We'll use your feedback to improve our customer support.</p>`
  }
});
