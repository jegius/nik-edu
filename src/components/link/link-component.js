import template from "./link-component.template.js";
import events from "../api/events.js";
import { addListeners, removeListeners, select } from "../api/helpers.js";

const linkAttributes = {
    LINK_TEXT: "text",
    IS_ACTIVE: "is-active",
    HREF: "href",
};

export class LinkComponent extends HTMLElement {
    static get name() {
        return "link-component";
    }
    #href;
    #link;

    #listeners = [
        [select.bind(this, ".link"), "click", this.#addEventListeners.bind(this)],
    ];

    #ATTRIBUTES_MAPPING = new Map([
        [linkAttributes.LINK_TEXT, LinkComponent.#setText],
        [linkAttributes.IS_ACTIVE, LinkComponent.#setActive],
        [linkAttributes.HREF, LinkComponent.#setHref],
    ]);

    constructor() {
        super();
        this.attachShadow({ mode:"open" });
    }

    static get observedAttributes() {
        return Object.values(linkAttributes)
    }

    connectedCallback() {
        this.#render();
        this.#listeners.forEach(addListeners.bind(this));

        for (let attrName of this.constructor.observedAttributes) {
            if (this.hasAttribute(attrName)) {
                const attrValue = this.getAttribute(attrName);
                this.attributeChangedCallback(attrName, null, attrValue)
            }
        }
    }

    disconnectedCallback() {
        this.#listeners.forEach(removeListeners);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue !== oldValue) {
            const callback = this.#ATTRIBUTES_MAPPING.get(name);
            this.#selectAndCallIfExist(callback, newValue);
        }
    }

    #selectAndCallIfExist(callback, value) {
        if (this.#link) {
            callback.call(this, this.#link, value)
        }
    }

    static #setText(element, newText) {
        element.innerHTML = newText;
    }

    static #setHref(element, newHref) {
        this.#href = newHref;
        if (element) {
            element.setAttribute("href", newHref);
        }
    }

    static #setActive(element, newAttr) {
        const isActive = newAttr === "true";
        if (isActive) {
            element.classList.add("_active");
        } else {
            element.classList.remove("_active");
        }
    }

    #addEventListeners(event) {
        const element = this.#href !== "#" ? document.querySelector(this.#href) : null;
        
        if (element) {
            event.preventDefault();
            element.scrollIntoView({ behavior: "smooth" });
        };

        this.dispatchEvent(
            new CustomEvent(events.LINK_CLICKED, { bubbles: true, detail: this })
        );
    }

    #render() {
        const templateElem = document.createElement("template");
        templateElem.innerHTML = template;

        this.shadowRoot.appendChild(templateElem.content.cloneNode(true));
        this.#link = this.shadowRoot.querySelector('.link');
    }
}