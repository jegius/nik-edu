import generateTemplate from "./link-component.template.js";
import events from "../api/events.js";
import { cleanNodes } from "../api/helpers.js"
import { addListeners, removeListeners, select } from "../api/helpers.js";

const linkAttributes = {
    LINK_TEXT: "text",
    IS_ACTIVE: "is-active",
    HREF: "href",
    STYLES: "styles",
};

export class LinkComponent extends HTMLElement {
    static get name() {
        return "link-component";
    }
    #href;
    #text;
    #styles;
    #active;
    #link;

    #listeners = [
        [select.bind(this, ".link"), "click", this.#addEventListeners.bind(this)],
    ];

    #ATTRIBUTES_MAPPING = new Map([
        [linkAttributes.LINK_TEXT, this.#setText.bind(this)],
        [linkAttributes.IS_ACTIVE, this.#setActive.bind(this)],
        [linkAttributes.HREF, this.#setHref.bind(this)],
        [linkAttributes.STYLES, this.#setStyle.bind(this)],
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
            callback.call(this, this.#link, value);
        }
    }

    #setText(_, newText) {
        this.#text = newText;
        this.#render();
    }

    #setHref(element, newHref) {
        this.#href = newHref;
        if (element) {
            element.setAttribute("href", newHref)
        }
    }

    #setActive(_, newActive) {
        if (newActive === "true") {
            this.#active = "_active";
        } else {
            this.#active = ""
        }
        this.#render(); 
    }
    
    #setStyle(_, newStyle) {
        this.#styles = newStyle;
        this.#render(); 
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

    #render(
        text = this.#text,
        href = this.#href,
        styles = this.#styles,
        active = this.#active
    ) {
        this.#listeners.forEach(addListeners.bind(this));
        const templateElem = document.createElement("template");
        templateElem.innerHTML = generateTemplate(text, href, styles, active);

        cleanNodes(this.shadowRoot).appendChild(templateElem.content.cloneNode(true));
        this.#link = this.shadowRoot.querySelector(".link");
    }
}