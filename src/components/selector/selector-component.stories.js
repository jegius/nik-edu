import { html } from "lit-html";
import "./selector-component.js";
import { SelectorComponent } from "./selector-component.js";
import "./selector-component.styles.js";
import "./selector-component.template.js";
import "../common.css";

export default {
    title: "SelectorComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <selector-component></selector-component>
    `
};

export const Default = Template.bind({});