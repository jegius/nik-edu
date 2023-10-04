import template from "./navigation-item-component.template.js";

export class NavigationItemComponent extends HTMLElement {
    static get name() {
        return "navigation-item-component";
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