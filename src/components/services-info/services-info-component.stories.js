import { html } from "lit-html";
import "./services-info-component.js";
import { ServicesInfoComponent } from "./services-info-component.js";
import "./services-info-component.styles.js";
import "./services-info-component.template.js";
import "../common.css";

export default {
    title: "ServicesInfoComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <services-info-component></services-info-component>
    `
};

export const Default = Template.bind({});