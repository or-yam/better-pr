// Execute code when the content script is injected into a page
console.log("Content script loaded.");

// Function to add the button inside the pull request tabs
function addButtonToPullRequest() {
    var tabs = document.querySelector('.js-repo-nav');
    if (tabs) {
      var button = document.createElement('button');
      button.innerText = '✨';
      button.classList.add('btn', 'btn-sm', 'my-custom-button');
  
      button.addEventListener('click', function() {
        // Button click logic
        alert('Button clicked!');
      });
  
      var existingTab = tabs.querySelector('.my-custom-button');
      if (!existingTab) {
        tabs.appendChild(button);
      }
    }
  }
  
  // Check if the page is fully loaded before adding the button
  document.addEventListener('DOMContentLoaded', function() {
    addButtonToPullRequest();
  });
  
  // Listen for changes to the page (e.g., when switching between pull request tabs)
  document.addEventListener('pjax:end', function() {
    addButtonToPullRequest();
  });
  

function addButtonToPage() {
    var button = document.createElement('button');
    button.innerText = '✨';
    button.addEventListener('click', function() {
      // Button click logic
      alert('Button clicked!');
    });
  
    document.body.appendChild(button);
  }