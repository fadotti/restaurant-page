function renderMenu() {
  const contentDiv = document.querySelector("div#content");
  contentDiv.replaceChildren([]);

  const contentDivRule = document.styleSheets[2].cssRules[5].style;
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

  function createCard(combo = 0, itemName, itemDescription, itemPrice) {
    const cardColumn = document.createElement("div");
    cardColumn.className = "card-column";
    cardColumn.append(document.createElement("div"), document.createElement("div"));
    cardColumn.children[0].innerHTML = itemName;
    cardColumn.children[1].innerHTML = itemDescription;

    const cardRow = document.createElement("div");
    cardRow.className = "card-row";
    cardRow.append(cardColumn, document.createElement("div"));
    cardRow.children[1].innerHTML = itemPrice;

    const card = document.createElement("div");
    card.className = combo == 0 ? "card" : "card combo-card";
    card.append(cardRow);

    return card
  }

  menuCardContainers[0].appendChild(createCard(
    1,
    "Parrillada individual",
    "Incluye una entrada, dos cortes de carne, gaseosa y postre",
    "AR$ <br> 20.000"
  ));

  menuCardContainers[0].appendChild(createCard(
    1,
    "Parrillada pradera",
    "Incluye dos entradas, dos cortes de carne, copa de vino y postre",
    "AR$ <br> 22.000"
  ));

  menuCardContainers[1].appendChild(createCard(
    1,
    "Empanada",
    "Jam&oacute;n y queso*, salte&ntilde;a, caprese, &aacute;rabe, matambre, carne agridulce* <br> <em>*Al horno o frita</em>",
    "AR$ <br> 2.000"
  ));

  menuCardContainers[1].appendChild(createCard(
    1,
    "Porci&oacute;n de rabas",
    "Calamares fritos con lim&oacute;n",
    "AR$ <br> 6.000"
  ));

  menuCardContainers[1].appendChild(createCard(
    1,
    "Provoleta",
    "Queso provolone a la parrilla",
    "AR$ <br> 5.000"
  ));

  menuCardContainers[1].appendChild(createCard(
    1,
    "Papas con huevos",
    "Papas fritas con 2 huevos fritos y cubitos de panceta",
    "AR$ <br> 5.000"
  ));

  menuCardContainers[1].appendChild(createCard(
    1,
    "Ensalada rusa",
    "Ensalada de zanahoria y papas con mayonesa",
    "AR$ <br> 4.000"
  ));

  menuCardContainers[1].appendChild(createCard(
    1,
    "Molleja",
    "Molleja asada al lim&oacute;n (250 gramos)",
    "AR$ <br> 9.000"
  ));

  menuCardContainers[2].appendChild(createCard(
    1,
    "&Ntilde;oquis",
    "&Ntilde;oquis caseros <br> <em>Salsa a elecci&oacute;n</em>",
    "AR$ <br> 12.000"
  ));

  menuCardContainers[2].appendChild(createCard(
    1,
    "Ravioles de carne y verdura",
    "Ravioles de carne y verdura con especias <br><em>Salsa a elecci&oacute;n</em>",
    "AR$ <br> 13.000"
  ));

  menuCardContainers[2].appendChild(createCard(
    1,
    "Sorrentinos de calabaza",
    "Sorrentinos de calabaza con almendra y queso <br><em>Salsa a elecci&oacute;n</em>",
    "AR$ <br> 13.000"
  ));

  menuCardContainers[2].appendChild(createCard(
    1,
    "Lomo completo",
    "Sandwich con bife de lomo, huevo, lechuga, tomate, jam&oacute;n cocido, queso y aderezos a elecci&oacute;n",
    "AR$ <br> 15.000"
  ));

  menuCardContainers[2].appendChild(createCard(
    1,
    "Hamburguesa",
    "Doble medall&oacute;n de 100g, lechuga, tomate, queso cheddar, panceta y aderezos a elecci&oacute;n",
    "AR$ <br> 14.000"
  ));

  menuCardContainers[2].appendChild(createCard(
    1,
    "Merluza al Roquefort",
    "Merluza al horno con queso Roquefort y guarnici&oacute;n <br> <em>Consultar opciones de guarnici&oacute;n con el personal</em>",
    "AR$ <br> 16.000"
  ));

  menuCardContainers[3].appendChild(createCard(
    1,
    "Gaseosa",
    "Linea Coca-Cola, 500ml",
    "AR$ <br> 2.500"
  ));

  menuCardContainers[3].appendChild(createCard(
    1,
    "Agua mineral",
    "Villavicencio, 500ml",
    "AR$ <br> 2.000"
  ));

  menuCardContainers[3].appendChild(createCard(
    1,
    "Limonada",
    "Jarra de limonada de un litro, con az&uacute;car, menta y jengibre",
    "AR$ <br> 6.000"
  ));

  menuCardContainers[4].appendChild(createCard(
    1,
    "Flan",
    "Flan casero con crema/dulce de leche",
    "AR$ <br> 4.000"
  ));

  menuCardContainers[4].appendChild(createCard(
    1,
    "Bud&iacute;n de pan",
    "Bud&iacute;n de pan con crema/dulce de leche",
    "AR$ <br> 3.500"
  ));

  menuCardContainers[4].appendChild(createCard(
    1,
    "Helado",
    "Dos bochas a elecci&oacute;n",
    "AR$ <br> 3.500"
  ));

  menuCardContainers[4].appendChild(createCard(
    1,
    "Cheesecake",
    "Hecha con frutos de estaci&oacute;n",
    "AR$ <br> 4.500"
  ));

  menuCardContainers[4].appendChild(createCard(
    1,
    "Lemon Pie",
    "Pastel de lim&oacute;n con merengue",
    "AR$ <br> 4.500"
  ));

  menuCardContainers[4].appendChild(createCard(
    1,
    "Sambay&oacute;n",
    "Postre a base de yemas de huevo, az&uacute;car y Oporto con nueces",
    "AR$ <br> 3.500"
  ));
}

export {renderMenu}