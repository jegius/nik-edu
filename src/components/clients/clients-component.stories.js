import { html } from "lit-html";
import "./clients-component.js";
import { ClientsComponent } from "./clients-component.js";
import "./clients-component.styles.js";
import "./clients-component.template.js";
import "../common.css";

export default {
    title: "ClientsComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <clients-component></clients-component>
    `
};

export const Default = Template.bind({});