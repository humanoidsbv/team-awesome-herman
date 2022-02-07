
const menuButton = document.querySelector(".menu-button");
const menuItems = document.querySelector(".menu");

menuButton.addEventListener('click', () => {

  console.log('Test');

  if (menuItems.style.display === "none") {
    menuItems.style.display = "block";
  } else {
    menuItems.style.display = "none";
  }
  
  });