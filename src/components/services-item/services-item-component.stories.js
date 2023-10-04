import { html } from "lit-html";
import "./services-item-component.js";
import { ServicesItemComponent } from "./services-item-component.js";
import "./services-item-component.styles.js";
import "./services-item-component.template.js";
import "../common.css";

export default {
    title: "ServicesItemComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <services-item-component></services-item-component>
    `
};

export const Default = Template.bind({});