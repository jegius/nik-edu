import template from './services-item-button-component.template.js';

export class ServicesItemButtonComponent extends HTMLElement {
    static get name() {
        return "services-item-button-component";
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