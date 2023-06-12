// Execute code when the content script is injected into a page
console.log('Content script loaded.');

//GET author,repo,pr number from URL
function getRepoInfoFromUrl(url) {
  const pathname = new URL(url).pathname;
  const parts = pathname.split('/');
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
  const apiUrl = 'https://better-pr-be.deno.dev/';
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: { author, repo, prNumber },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('API Request Failed:', error);
  }
}

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

const i = setInterval(function () {
  let cancelBTN = document.querySelector('.js-comment-cancel-button');
  if (cancelBTN) {
    var button = document.createElement('button');
    button.innerText = '✨ Better PR';
    button.classList.add('btn', 'btn-sm', 'my-custom-button');

    button.addEventListener('click', async function () {
      // Button click logic
      const { author, repo, prNumber } = getRepoInfoFromUrl(window.location.href);
      const description = await createDescription({ author, repo, prNumber });
      writeToTextArea();
    });

    cancelBTN.parentElement.prepend(button);
    clearInterval(i);
  }
}, 200);
