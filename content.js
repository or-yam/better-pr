// Execute code when the content script is injected into a page
console.log("Content script loaded.");

function addButtonToPage() {
    var button = document.createElement('button');
    button.innerText = '✨';
    button.addEventListener('click', function() {
      // Button click logic
      alert('Button clicked!');
    });
  
    document.body.appendChild(button);
  }