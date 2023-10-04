import template from './main-site-component.template.js';

export class MainSiteComponent extends HTMLElement {
    static get name() {
        return "main-site-component";
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