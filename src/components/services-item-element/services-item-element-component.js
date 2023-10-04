import template from './services-item-element-component.template.js';

export class ServicesItemElementComponent extends HTMLElement {
    static get name() {
        return "services-item-element-component";
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