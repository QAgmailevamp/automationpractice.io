// Function to show the selected tab
function showTab(tabId) {
  // Hide all tabs
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach((tab) => {
    tab.classList.remove('active');
  });

  // Show the selected tab
  const selectedTab = document.getElementById(tabId);
  selectedTab.classList.add('active');
}

// Function to change text in the Buttons tab
function changeText() {
  const textElement = document.getElementById('text');
  textElement.innerText = 'The text has been changed!';
}
