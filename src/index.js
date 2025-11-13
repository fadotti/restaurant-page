import "./style.css";
import { renderHomepage } from "./homepage";
import { renderMenu } from "./menu";
import { renderContactPage } from "./contact";

renderHomepage();

// Export functions for console accessibility

window.renderHomepage = renderHomepage;
window.renderMenu = renderMenu;
window.renderContactPage = renderContactPage;

// console.log(mapMarker);