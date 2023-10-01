import template from "./home-face-component.template.js";

export class HomeFaceComponent extends HTMLElement {
    static get name() {
        return "home-face-component";
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