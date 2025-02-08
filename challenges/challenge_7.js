'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('button.close-modal');

// When selecting an element with querySelector and there are multiple matching elements
// NB only the first element is selected!!! NB
// const openModalBtns = document.querySelector('.show-modal');
// querySelectorAll
const openModalBtns = document.querySelectorAll('.show-modal');

const openModal = () => {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

const closeModal = () => {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

openModalBtns.forEach(modal => {
  modal.addEventListener('click', openModal);
});

document.addEventListener('keydown', event => {
  console.log(event);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});

// JS
// element.style.display = 'none';
// OR
// element.classList.remove('hidden');
// element.classList.add('hidden');

// if (element.classList.contains('hidden') {}

//

// Create a css class like:
// hidden {
//     display: none
// }
