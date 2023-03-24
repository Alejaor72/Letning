import * as components from "./components/export.js";
import dataCategories from "./components/Categories/dataCategories.js";
import dataTutorials from "./components/Tutorials/dataTutorials.js";

import "./components/export.js";
import categories, { Attribute } from "./components/Categories/Categories.js";
import Tutorials, { Attribute1 } from "./components/Tutorials/Tutorials.js";

class AppContainer extends HTMLElement {
    categoriesList: categories[] = [];
    tutorialsList: Tutorials[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        dataCategories.forEach((data) => {
            const categoriesCard = this.ownerDocument.createElement("my-categories") as categories;
                categoriesCard.setAttribute(Attribute.image, data.image);
                categoriesCard.setAttribute(Attribute.tittle, data.title);
                this.categoriesList.push(categoriesCard);
        });

        dataTutorials.forEach((data) => {
            const tutorialsCard = this.ownerDocument.createElement("my-tutorials") as Tutorials;
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
             <img src="/img/Component1.jpg" alt="" class="image1">
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

        
        const categoriesCards = this.ownerDocument.createElement("section")
        categoriesCards.className = 'categoriesSection'
        this.categoriesList.forEach((categoriesCard) => {
            categoriesCards.appendChild(categoriesCard)
        });
        this.shadowRoot?.appendChild(categoriesCards);

        
        
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
            <link rel="stylesheet" href="./index.css">
            <div class="Title">
            <h3>Tutorials</h3>
            </div>
            `;
        }
        
        const tutorialsCards = this.ownerDocument.createElement("section")
        tutorialsCards.className = 'tutorialsSection'
        this.tutorialsList.forEach((tutorialsCard) => {
            tutorialsCards.appendChild(tutorialsCard)
        });
        this.shadowRoot?.appendChild(tutorialsCards);
        
   
        
    }
}

customElements.define("app-container", AppContainer);