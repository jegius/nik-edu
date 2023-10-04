import { html } from "lit-html";
import "./services-item-button-component.js";
import { ServicesItemButtonComponent } from "./services-item-button-component.js";
import "./services-item-button-component.styles.js";
import "./services-item-button-component.template.js";
import "../common.css";

export default {
    title: "ServicesItemButtonComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <services-item-button-component></services-item-button-component>
    `
};

export const Default = Template.bind({});