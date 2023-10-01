import template from "./text-header-component.template.js";

export class TextHeaderComponent extends HTMLElement {
    static get name() {
        return "text-header-component";
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