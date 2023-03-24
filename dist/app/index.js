import dataCategories from "./components/Categories/dataCategories.js";
import dataTutorials from "./components/Tutorials/dataTutorials.js";
import "./components/export.js";
import { Attribute } from "./components/Categories/Categories.js";
import { Attribute1 } from "./components/Tutorials/Tutorials.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.categoriesList = [];
        this.tutorialsList = [];
        this.attachShadow({ mode: "open" });
        dataCategories.forEach((data) => {
            const categoriesCard = this.ownerDocument.createElement("my-categories");
            categoriesCard.setAttribute(Attribute.image, data.image);
            categoriesCard.setAttribute(Attribute.tittle, data.title);
            this.categoriesList.push(categoriesCard);
        });
        dataTutorials.forEach((data) => {
            const tutorialsCard = this.ownerDocument.createElement("my-tutorials");
            tutorialsCard.setAttribute(Attribute1.image, data.image);
            tutorialsCard.setAttribute(Attribute1.tittle, data.title);
            tutorialsCard.setAttribute(Attribute1.creator, data.creator);
            this.tutorialsList.push(tutorialsCard);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a, _b;
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="./index.css">
            `;
        }
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="./index.css">
            <div class="Menu">
              <h2>Letning</h2>
              <div class="menutext">
               <a href="">Sign In</a>
               <a href="" class="login">Log In</a>
              </div>
            </div>
            `;
        }
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="./index.css">   
          <div class="Banner">
             <img src="/img/Component1.jpg" alt="">
             <div class="Bannertext">
              <h1>Letning is a platform of variety tutorials</h1>
              <p>Learn with people of all kinds, and from anywhere.</p>
              <div class="Bannerbuttons">
                <button class="button1">See the tutorials</button>
                <button class="button2">Create an account</button>
             </div>
            </div>
          </div>
            `;
        }
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="./index.css">
            <div class="Title">
            <h3>Select the Categories</h3>
            </div>
            `;
        }
        const categoriesCards = this.ownerDocument.createElement("section");
        categoriesCards.className = 'categoriesSection';
        this.categoriesList.forEach((categoriesCard) => {
            categoriesCards.appendChild(categoriesCard);
        });
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(categoriesCards);
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="./index.css">
            <div class="Title">
            <h3>Tutorials</h3>
            </div>
            `;
        }
        const tutorialsCards = this.ownerDocument.createElement("section");
        tutorialsCards.className = 'tutorialsSection';
        this.tutorialsList.forEach((tutorialsCard) => {
            tutorialsCards.appendChild(tutorialsCard);
        });
        (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(tutorialsCards);
    }
}
customElements.define("app-container", AppContainer);
