import template from './footer-social-links-component.template.js';

export class FooterSocialLinksComponent extends HTMLElement {
    static get name() {
        return "footer-social-links-component";
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