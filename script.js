
const menuButton = document.querySelector(".menu-button");
const menuItems = document.querySelector(".menu");

menuButton.addEventListener('click', () => {

  if (menuItems.style.display === "none") {
    menuItems.style.display = "block";
    document.querySelector(".menu-button-icon").src = "assets/icons/Close.svg";
  } else {
    menuItems.style.display = "none";
    document.querySelector(".menu-button-icon").src = "assets/icons/Hamburger.svg";
  }
  
  });