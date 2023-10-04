import { html } from "lit-html";
import "./services-list-component.js";
import { ServicesListComponent } from "./services-list-component.js";
import "./services-list-component.styles.js";
import "./services-list-component.template.js";
import "../common.css";

export default {
    title: "ServicesListComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <services-list-component></services-list-component>
    `
};

export const Default = Template.bind({});