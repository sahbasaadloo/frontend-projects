const header=document.querySelector('header');
window.addEventListener('scroll',function(){
    header.classList.toggle('sticky',window.scrollY > 200)
});
const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
  navList.classList.toggle('active');
  menuIcon.classList.toggle('open');
});

  document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".read-more-btn");

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const moreText = this.previousElementSibling.querySelector(".more-text");
        if (moreText.style.display === "none") {
          moreText.style.display = "inline";
          this.textContent = "Read Less";
        } else {
          moreText.style.display = "none";
          this.textContent = "Read More";
        }
      });
    });
  });

const loadMoreBtn = document.getElementById('loadMoreBtn');
const hiddenItems = document.querySelectorAll('.gallery-item.hidden');

loadMoreBtn.addEventListener('click', () => {
  hiddenItems.forEach(item => item.classList.remove('hidden'));
  loadMoreBtn.style.display = 'none';
});
  document.getElementById("loadMoreBtn").addEventListener("click", function () {
    document.querySelectorAll(".gallery-item.hidden").forEach(item => {
      item.classList.remove("hidden");
    });
    this.style.display = "none";
  });



  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");

  const imgs = document.querySelectorAll(".project-images img");

  imgs.forEach(img => {
    img.addEventListener("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    });
  });

