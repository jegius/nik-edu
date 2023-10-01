import { html } from "lit-html";
import "./services-component.js";
import { ServicesComponent } from "./services-component.js";
import "./services-component.styles.js";
import "./services-component.template.js";
import "../common.css";

export default {
    title: "ServicesComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <services-component></services-component>
    `
};

export const Default = Template.bind({});