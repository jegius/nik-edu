import template from './services-item-header-component.template.js';

export class ServicesItemHeaderComponent extends HTMLElement {
    static get name() {
        return "services-item-header-component";
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