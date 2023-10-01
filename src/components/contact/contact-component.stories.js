import { html } from "lit-html";
import "./contact-component.js";
import { ContactComponent } from "./contact-component.js";
import "./contact-component.styles.js";
import "./contact-component.template.js";
import "../common.css";

export default {
    title: "ContactComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <contact-component></contact-component>
    `
};

export const Default = Template.bind({});