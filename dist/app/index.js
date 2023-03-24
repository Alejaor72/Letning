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
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="./index.css">
            `;
        }
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="./index.css">
            <div class="Menu">
              <h3>Letning</h3>
              <a href="">Sign In</a>
              <a href="">Log In</a>
            </div>
            `;
        }
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="./index.css">   
          <div class="Banner">
             <img src="/img/Component 1.jpg" alt="">
             <h3>Letning is a platform of variety tutorials</h3>
             <p>Learn with people of all kinds, and from anywhere.</p>
             <div class="Bannerbuttons">
               <button>See the tutorials</button>
               <button>Create an account</button>
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
        this.categoriesList.forEach((data) => {
            var _a;
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(data);
        });
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="./index.css">
            <div class="Title">
            <h3>Tutorials</h3>
            </div>
            `;
        }
        this.tutorialsList.forEach((data) => {
            var _a;
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(data);
        });
    }
}
customElements.define("app-container", AppContainer);
