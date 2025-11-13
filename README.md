# restaurant-page

---

Sent in as a submission for [Project: Restaurant Page](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page).

---

The goal of this project is to dynamically render a restaurant homepage by using JavaScript alone to generate the website's entire content. A considerable challenge in this project has been to start with an almost empty `index.html` and to build the website from the DOM. In the previous and simpler projects I'd been involved in, my approach had been to start with a static, almost final HTML document and to do minor modifications to it dynamically.


Another skill that has been put to the test in this project is the modularization of code and management of assets through a bundler, the bundler of choice being webpack. There are several `.js` files: `index.js` manages the general logic of the page, each button from the nav bar has an associated `.js` file that exports a function to render the desired information. `index.js` imports this function and updates the page. 


Credits are due to [Ezequiel Garrido](https://unsplash.com/@zegarr?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) for being the author of the background image.