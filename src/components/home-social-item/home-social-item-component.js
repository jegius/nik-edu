import template from './home-social-item-component.template.js';

export class HomeSocialItemComponent extends HTMLElement {
    static get name() {
        return "home-social-item-component";
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