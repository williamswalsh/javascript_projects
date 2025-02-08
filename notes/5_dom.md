# Document Object Model

```javascript
// Can get element from html document
                         document.querySelector(<SELECTOR>);
const paragraphElement = document.querySelector('.message');
console.log(paragraphElement.textContent);

// Can get text from paragraph element
                                 <PARAGRAPH_ELEM>.textContent
const msgTxt = document.querySelector('.message').textContent;

// Can get text from input element
                               <INPUT_ELEMENT>.value
const guess = document.querySelector('.guess').value;

// Can set text of html element
document.querySelector('.message').textContent = "William rocks at JS.";

// Generate pseudo random number between 1 and 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// Event listener //////////////////////////////////////////////
<HTML_ELEMENT>.addEventListener(<EVENT>, <FUNCTION_EXPRESSION>);
element.addEventListener('click', () => {});
element.addEventListener('click', function() {});

// Sample
const button = document.querySelector('.check');
button.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(`Guess: ${guess}, Type of guess: ${typeof guess}`);
});
////////////////////////////////////////////////////////////////


// When selecting an element with querySelector and there are multiple matching elements -> only the first element is selected!!! NB
// const openModalBtns = document.querySelector('.show-modal');

// Multiple element selection: querySelectorAll
// Returns NodeList
const openModalBtns = document.querySelectorAll('.show-modal');


// Can refer to class list of element
// can remove/add/contains on classList
const openModal = () => {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

const closeModal = () => {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

closeModalBtn.addEventListener('click', closeModal);
openModalBtn.addEventListener('click', openModal);

// keydown - when key is hit
// keypress - when key is held - multiple presses -> multiple events
// keyup - when key is released
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
  }
});

// Can also modify classes by:
// element.style.display = 'none';
// OR
// element.classList.remove('hidden');

// Create a css class like:
// hidden {
//     display: none
// }

```
