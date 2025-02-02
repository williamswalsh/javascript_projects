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

```
