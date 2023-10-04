import template from './footer-email-input-component.template.js';

export class FooterEmalInputComponent extends HTMLElement {
    static get name() {
        return "footer-email-input-component";
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