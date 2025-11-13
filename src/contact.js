import mapMarker from "./SVGs/map-marker.svg";
import phoneOutline from "./SVGs/phone-outline.svg";
import email from "./SVGs/email.svg";
import { contactMessage } from "./contact-message";

function renderContactPage() {
  const contentDiv = document.querySelector("div#content");
  contentDiv.replaceChildren([]);

  const contentDivRule = document.styleSheets[2].cssRules[4].style;
  contentDivRule.backgroundImage = '';

  const child = document.createElement("div");
  child.className = "contact-page";

  contentDiv.appendChild(child);

  const innerDiv = document.querySelector("div#content > div.contact-page");

  const rowElement = document.createElement("div");
  rowElement.append(document.createElement("img"), document.createElement("div"));

  innerDiv.append(document.createElement("div"), rowElement.cloneNode(true), rowElement.cloneNode(true), rowElement.cloneNode(true));

  const childDivs = document.querySelectorAll("div.contact-page > div");
  childDivs[0].innerHTML = contactMessage;

  const icons = document.querySelectorAll("div#content > div.contact-page > div > img");
  icons[0].src = mapMarker;
  icons[1].src = phoneOutline;
  icons[2].src = email;

  const values = document.querySelectorAll("div#content > div.contact-page > div > div");
  values[0].innerHTML = "Calle que no existe 777, CP 5000, C&oacuterdoba, Argentina";
  values[1].innerHTML = "+54 9 3510 000 777";
  values[2].innerHTML = "praderaserrana@gmail.com";
}

export {renderContactPage}