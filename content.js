// Execute code when the content script is injected into a page
console.log('Content script loaded.');
addButtonToPullRequest();

// Function to add the button inside the pull request tabs
function addButtonToPullRequest() {
  var tabs = document.querySelector('.gh-header-actions');
  if (tabs) {
    console.warn('if tab true');
    var button = document.createElement('button');
    button.innerText = '✨';
    button.classList.add('btn', 'btn-sm', 'my-custom-button');

    button.addEventListener('click', function () {
      // Button click logic
      alert('Button clicked!');
      writeToTextArea();
    });

    var existingTab = tabs.querySelector('.my-custom-button');
    if (!existingTab) {
      tabs.appendChild(button);
    }
  }
}

// Check if the page is fully loaded before adding the button
document.addEventListener('DOMContentLoaded', function () {
  addButtonToPullRequest();
});

// Listen for changes to the page (e.g., when switching between pull request tabs)
document.addEventListener('pjax:end', function () {
  addButtonToPullRequest();
});

function writeToTextArea() {
  var textArea = document.querySelector('#new_comment_field');
  textArea.value = 'test test test';
}
