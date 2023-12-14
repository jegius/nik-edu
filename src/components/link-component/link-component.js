import template from "./link-component.template.js";

const navItemAttributes = {
    ITEM_TEXT: "text",
    IS_ACTIVE: "is-active",
    HREF: "href",
}

export class LinkComponent extends HTMLElement {
    static get name() {
        return "link-component";
    }
    #href;
    #link;

    #ATTRIBUTES_MAPPING = new Map([
        [navItemAttributes.ITEM_TEXT, LinkComponent.#setText],
        [navItemAttributes.IS_ACTIVE, LinkComponent.#setActive],
        [navItemAttributes.HREF, LinkComponent.#setHref],
    ]);

    constructor() {
        super();
        this.attachShadow({ mode:"open" });
    }

    static get observedAttributes() {
        return Object.values(navItemAttributes)
    }

    connectedCallback() {
        this.#render();

        for (let attrName of this.constructor.observedAttributes) {
            if (this.hasAttribute(attrName)) {
                const attrValue = this.getAttribute(attrName);
                this.attributeChangedCallback(attrName, null, attrValue)
            }
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue !== oldValue) {
            const callback = this.#ATTRIBUTES_MAPPING.get(name);
            this.#selectAndCallExist(callback, newValue);
        }
    }

    #selectAndCallExist(callback, value) {
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

    #render() {
        const templateElem = document.createElement("template");
        templateElem.innerHTML = template;

        this.shadowRoot.appendChild(templateElem.content.cloneNode(true));
        this.#link = this.shadowRoot.querySelector('.link');
    }
}