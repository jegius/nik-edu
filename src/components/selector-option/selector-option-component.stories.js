import { html } from "lit-html";
import "./selector-option-component.js";
import { SelectorOptionComponent } from "./selector-option-component.js";
import "./selector-option-component.styles.js";
import "./selector-option-component.template.js";
import "../common.css";

export default {
    title: "SelectorOptionComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <selector-option-component></selector-option-component>
    `
};

export const Default = Template.bind({});