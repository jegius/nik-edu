import { html } from "lit-html";
import "./header-component.js";
import { HeaderComponent } from "./header-component.js";
import "./header-component.styles.js";
import "./header-component.template.js";
import "../common.css";

export default {
    title: "HeaderComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <header-component></header-component>
    `
};

export const Default = Template.bind({});