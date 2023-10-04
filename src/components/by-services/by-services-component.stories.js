import { html } from "lit-html";
import "./by-services-component.js";
import { ByServicesComponent } from "./by-services-component.js";
import "./by-services-component.styles.js";
import "./by-services-component.template.js";
import "../common.css";

export default {
    title: "ByServicesComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <by-services-component></by-services-component>
    `
};

export const Default = Template.bind({});