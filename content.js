async function createDescription() {
  const apiUrl = 'https://better-pr-be.deno.dev/';
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prUrl: window.location.href })
    });
    const data = await response.json();
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
      const description = await createDescription();
      writeToTextArea(description);
    });

    cancelBTN.parentElement.prepend(button);
    clearInterval(i);
  }
}, 200);
