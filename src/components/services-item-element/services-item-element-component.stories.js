import { html } from "lit-html";
import "./services-item-element-component.js";
import { ServicesItemElementComponent } from "./services-item-element-component.js";
import "./services-item-element-component.styles.js";
import "./services-item-element-component.template.js";
import "../common.css";

export default {
    title: "ServicesItemElementComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <services-item-element-component></services-item-element-component>
    `
};

export const Default = Template.bind({});