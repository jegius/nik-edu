import { html } from "lit-html";
import "./services-item-header-component.js";
import { ServicesItemHeaderComponent } from "./services-item-header-component.js";
import "./services-item-header-component.styles.js";
import "./services-item-header-component.template.js";
import "../common.css";

export default {
    title: "ServicesItemHeaderComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <services-item-header-component></services-item-header-component>
    `
};

export const Default = Template.bind({});