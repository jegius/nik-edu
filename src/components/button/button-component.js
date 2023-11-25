import template from "./button-component.template.js";

const buttonAttributes = {
    BUTTON_TEXT: 'text',
    BUTTON_SIZE: 'size',
    BUTTON_COLOR: 'color',
    IS_ACTIVE: 'is-active',
};

const buttonSize = ['_small', '_medium', '_large'];
const buttonColor = ['_red', '_orange']

export class ButtonComponent extends HTMLElement {
    static get name() {
        return "button-component";
    }

    #button;
    
    #ATTRIBUTE_MAPPING = new Map([
        [buttonAttributes.BUTTON_TEXT, ButtonComponent.#setText],
        [buttonAttributes.BUTTON_SIZE, ButtonComponent.#setSize],
        [buttonAttributes.BUTTON_COLOR, ButtonComponent.#setColor],
        [buttonAttributes.IS_ACTIVE, ButtonComponent.#setActive],
    ]);


    constructor() {
        super();
        this.attachShadow({ mode:"open" });
    }

    static get observedAttributes() {
        return Object.values(buttonAttributes);
    }

    connectedCallback() {
        this.#render();

        for (let attrName of this.constructor.observedAttributes) {
            if (this.hasAttribute(attrName)) {
                const attrValue = this.getAttribute(attrName);
                this.attributeChangedCallback(attrName, null, attrValue);
            }
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue !== oldValue){
            const callback = this.#ATTRIBUTE_MAPPING.get(name);
            if (this.#button) {
                callback(this.#button, newValue);
            }
        }
    }

    static #setText(element, newText) {
        element.setAttribute("value", newText);
    }

    static #setSize(element, newSize) {
        for (let sizeName of buttonSize) {
            if (element.classList.contains(sizeName)) {
                element.classList.replace(sizeName, "_" + newSize)
                break
            }
        }
        element.classList.add("_" + newSize)
        }

    static #setColor(element, newColor) {
        for (let colorName of buttonColor) {
            if (element.classList.contains(colorName)) {
                element.classList.replace(colorName, "_" + newColor)
                break
            }
        }
        element.classList.add("_" + newColor)
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
        this.#button = this.shadowRoot.querySelector(".button");
    }
}