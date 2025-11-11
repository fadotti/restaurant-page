console.log("Everything is running OK");

import "./style.css";
import { renderHomepage } from "./homepage";
import { renderMenu } from "./menu";

renderHomepage();

// Export functions for console accessibility

window.renderHomepage = renderHomepage;
window.renderMenu = renderMenu;