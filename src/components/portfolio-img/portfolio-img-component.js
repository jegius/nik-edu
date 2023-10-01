import template from './portfolio-img-component.template.js';

export class PortfolioImgComponent extends HTMLElement {
    static get name() {
        return "portfolio-img-component";
    }


    constructor() {
        super();
        this.attachShadow({ mode:"open" });
    }

    connectedCallback() {
        this.#render();
    }

    #render() {
        const templateElem = document.createElement("template");
        templateElem.innerHTML = template;
        this.shadowRoot.appendChild(templateElem.content.cloneNode(true));
    }
}