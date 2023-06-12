// Execute code when the content script is injected into a page
console.log("Content script loaded.");
addButtonToPullRequest();

// Function to add the button inside the pull request tabs
function addButtonToPullRequest() {
  console.warn("addButtonToPullRequest 🟢🟢🟢🟢🟢🟢🟢🟢🟢🟢");
  var tabs = document.querySelector(".js-repo-nav");
  if (tabs) {
    console.warn("if tab true");
    var button = document.createElement("button");
    button.innerText = "✨ Better PR";
    button.classList.add("btn", "btn-sm", "my-custom-button");

    button.addEventListener("click", function () {
      // Button click logic
      alert("Button clicked!");
    });

    var existingTab = tabs.querySelector(".my-custom-button");
    if (!existingTab) {
      tabs.appendChild(button);
    }
  }
}

// Check if the page is fully loaded before adding the button
document.addEventListener("DOMContentLoaded", function () {
  console.warn("page is fully loaded 🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴");
  addButtonToPullRequest();
});

// Listen for changes to the page (e.g., when switching between pull request tabs)
document.addEventListener("pjax:end", function () {
  console.warn("changes to the page 🔵🔵🔵🔵🔵🔵🔵🔵🔵");
  addButtonToPullRequest();
});

function addButtonToPage() {
  var button = document.createElement("button");
  button.innerText = "✨";
  button.addEventListener("click", function () {
    // Button click logic
    alert("Button clicked!");
  });

  document.body.appendChild(button);
}
