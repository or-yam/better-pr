// Execute code when the content script is injected into a page
console.log('Content script loaded.');
addButtonToPullRequest();

// Function to add the button inside the pull request tabs
function addButtonToPullRequest() {
  var tabs = document.querySelector('.gh-header-actions');
  if (tabs) {
    console.warn('if tab true');
    var button = document.createElement('button');
    button.innerText = '✨ Better PR';
    button.classList.add('btn', 'btn-sm', 'my-custom-button');

    button.addEventListener("click", async function () {
      // Button click logic
      alert("Button clicked!");
      const { author, repo, prNumber } = getRepoInfoFromUrl(
        window.location.href
      );
      const description = await createDescription({ author, repo, prNumber });
      writeToTextArea();
    });

    var existingTab = tabs.querySelector('.my-custom-button');
    if (!existingTab) {
      tabs.appendChild(button);
    }
  }
}

//GET author,repo,pr number from URL
function getRepoInfoFromUrl(url) {
  const pathname = new URL(url).pathname;
  const parts = pathname.split("/");
  const author = parts[1];
  const repo = parts[2];
  const prNumber = parts[4];
  return {
    author,
    repo,
    prNumber,
  };
}

//fetch from API
async function createDescription(author, repo, prNumber) {
  const apiUrl = "https://better-pr-be.deno.dev/";
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: { author, repo, prNumber },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("API Request Failed:", error);
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
  var textArea = document.querySelector('[name="pull_request[body]"]');
  var dropdownButton = document.querySelector('.timeline-comment-action');
  dropdownButton.click();
  setTimeout(() => {
    var editButton = document.querySelector('.js-comment-edit-button');
    editButton.click();
    textArea.value = 'test test test';
  }, '1000');
}
