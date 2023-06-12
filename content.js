const MOCK_DATA = `# Add VR support to Three.js demo application

This pull request adds a new feature to the Three.js demo application. The new feature allows users to interact with the scene using a virtual reality headset. The feature was implemented using the WebXR API.

## Changes

* A new \`VRController\` class was created. This class provides methods for interacting with the scene using a virtual reality headset.
* The \`Scene\` class was updated to use the \`VRController\` class.
* The \`index.html\` file was updated to add support for WebXR.

## Testing

To test the new feature, you will need a virtual reality headset and a browser that supports WebXR. Once you have the necessary hardware and software, you can open the \`index.html\` file in your browser and put on your headset. You should now be able to interact with the scene using your headset.

Here are some of the things you can do:

* Move around the scene by looking around.
* Zoom in and out by moving your head closer to or further away from the scene.
* Rotate the scene by turning your head.
* Click on objects in the scene to interact with them.
`;

async function createDescription() {
  const apiUrl = "https://better-pr-be.deno.dev/";
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      // mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prUrl: window.location.href }),
    });
    const data = await response.json();
    return data || MOCK_DATA;
  } catch (error) {
    console.error("API Request Failed:", error);
    return MOCK_DATA;
  }
}

function writeToTextArea(description) {
  var textArea = document.querySelector('[name="pull_request[body]"]');
  var dropdownButton = document.querySelector(".timeline-comment-action");
  dropdownButton.click();
  setTimeout(() => {
    var editButton = document.querySelector(".js-comment-edit-button");
    editButton.click();
    textArea.value = description;
  }, "1000");
}

const i = setInterval(function () {
  let cancelBTN = document.querySelector(".js-comment-cancel-button");
  if (cancelBTN) {
    var button = document.createElement("button");
    button.innerText = "✨ Better PR";
    button.classList.add("btn", "btn-sm", "my-custom-button");

    button.addEventListener("click", async function () {
      const description = await createDescription();
      writeToTextArea(description);
    });

    cancelBTN.parentElement.prepend(button);
    clearInterval(i);
  }
}, 200);
