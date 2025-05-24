const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('main-image');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', (e) => {
    mainImage.src = e.target.src;
  });
});
