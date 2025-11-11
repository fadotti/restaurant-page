function renderMenu() {
  const contentDiv = document.querySelector("div#content");
  contentDiv.replaceChildren([]);

  const contentDivRule = document.styleSheets[2].cssRules[4].style;
  contentDivRule.backgroundImage = '';

  const child = document.createElement("div");
  child.className = "menu";

  contentDiv.appendChild(child);

  const innerDiv = document.querySelector("div#content > div.menu");

  innerDiv.appendChild(document.createElement("div"));
  innerDiv.appendChild(document.createElement("div"));
  innerDiv.appendChild(document.createElement("div"));
  innerDiv.appendChild(document.createElement("div"));
  innerDiv.appendChild(document.createElement("div"));

  document.querySelectorAll("div.menu > div").forEach((element) => {
    element.appendChild(document.createElement("div"));
    element.appendChild(document.createElement("div"));
  })

  const menuSections = document.querySelectorAll("div.menu > div > div:first-child");
  menuSections[0].textContent = "Combos";
  menuSections[1].textContent = "Entradas";
  menuSections[2].textContent = "Platos Principales";
  menuSections[3].textContent = "Bebidas";
  menuSections[4].textContent = "Postres";

  const menuCardContainers = document.querySelectorAll("div.menu > div > div:nth-child(2)");
  
  const comboCard = `
    <div clas="card combo-card">
      <div clas="card-row">
        <div clas="card-column">
          <div></div>
          <div></div>
        </div>
        <div>
        </div>
      </div>
    </div>
    `;

  const card = `
    <div clas="card">
      <div clas="card-row">
        <div clas="card-column">
          <div></div>
          <div></div>
        </div>
        <div>
        </div>
      </div>
    </div>
    `;


  // innerDiv.appendChild(document.createElement("div"));
  // const firstChild = document.querySelector("div#content > div > *:nth-child(1)");

  // firstChild.
}

export {renderMenu}

// document.styleSheets[2].cssRules[4].style.backgroundImage