import "./style.css";
import { renderHomepage } from "./homepage.js";
import { renderMenu } from "./menu.js";
import { renderContactPage } from "./contact.js";

renderHomepage();
const navButtons = document.querySelectorAll("nav > button");
navButtons[0].className = navButtons[0].className == 'clicked' ? 'not-clicked' : 'clicked';

function attachListenerToReservarButton() {
  const reservarButton = document.querySelector("div.home button");
  reservarButton.addEventListener('click', () => {
    renderContactPage();
    navButtons[0].className = "not-clicked";
    navButtons[1].className = "not-clicked";
    navButtons[2].className = navButtons[2].className == 'clicked' ? 'not-clicked' : 'clicked';
  })
}

attachListenerToReservarButton();

navButtons[0].addEventListener('click', () => {
  renderHomepage();
  navButtons[0].className = navButtons[0].className == 'clicked' ? 'not-clicked' : 'clicked';
  navButtons[1].className = "not-clicked";
  navButtons[2].className = "not-clicked";
  attachListenerToReservarButton();
})

navButtons[1].addEventListener('click', () => {
  renderMenu();
  navButtons[0].className = "not-clicked";
  navButtons[1].className = navButtons[1].className == 'clicked' ? 'not-clicked' : 'clicked';
  navButtons[2].className = "not-clicked";
})

navButtons[2].addEventListener('click', () => {
  renderContactPage();
  navButtons[0].className = "not-clicked";
  navButtons[1].className = "not-clicked";
  navButtons[2].className = navButtons[2].className == 'clicked' ? 'not-clicked' : 'clicked';
})

// Export functions for console accessibility

window.renderHomepage = renderHomepage;
window.renderMenu = renderMenu;
window.renderContactPage = renderContactPage;