import image from "./images/ezequiel-garrido-aWh5s820JZI-unsplash.jpg";

function renderHomepage() {
  const contentDiv = document.querySelector("div#content");
  contentDiv.replaceChildren([]);

  const contentDivRule = document.styleSheets[2].cssRules[5].style;
  contentDivRule.background = 'url("http://localhost:8080/df03a4bb2ea9776c4b1b.jpg") 50% 0px / contain no-repeat';
  console.log(image);
  console.log(typeof image);

  const child = document.createElement("div");
  child.className = "home";

  contentDiv.appendChild(child);

  const innerDiv = document.querySelector("div#content > div.home");

  innerDiv.appendChild(document.createElement("div"));
  innerDiv.appendChild(document.createElement("div"));
  innerDiv.appendChild(document.createElement("button"));

  const firstChild = document.querySelector("div#content > div > *:nth-child(1)");
  const secondChild = document.querySelector("div#content > div > *:nth-child(2)");
  const thirdChild = document.querySelector("div#content > div > *:nth-child(3)");

  firstChild.innerHTML = "Bienvenidos a <br> <span>Pradera Serrana <br>Parrillada y bodeg&oacute;n</span>";
  secondChild.innerHTML = "Para reservar tu lugar, hac&eacute; click en el bot&oacute;n:";
  thirdChild.textContent = "Reservar";
}

export {renderHomepage};