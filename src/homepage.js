function renderHomepage() {
  const contentDiv = document.querySelector("div#content");
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