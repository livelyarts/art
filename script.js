function hoverInsta(element) {
  element.setAttribute('src', 'paintings/instaIndigo.svg');
}

function unhoverInsta(element) {
  element.setAttribute('src', 'paintings/instaWhite.svg');
}

// function hoverShop(element) {
//   element.setAttribute('src', 'paintings/cartIndigo.svg');
// }

// function unhoverShop(element) {
//   element.setAttribute('src', 'paintings/cartWhite.svg');
// }

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".paintings img");
const full = document.querySelector(".full-img");
const caption = document.querySelector(".caption");



previews.forEach(preview => {
  preview.addEventListener('click', () => {
    modal.classList.add("open");
    full.classList.add("open");
    full.src = preview.src;
    const altText = preview.alt;
    caption.textContent = altText;
  });
});

modal.addEventListener('click', (e) => {
  if(e.target.classList.contains('modal')){
    modal.classList.remove('open');
  }
});

full.addEventListener("contextmenu", e => e.preventDefault());