import { html } from "lit-html";
import "./footer-email-input-component.js";
import { FooterEmalInputComponent } from "./footer-email-input-component.js";
import "./footer-email-input-component.styles.js";
import "./footer-email-input-component.template.js";
import "../common.css";

export default {
    title: "FooterEmalInputComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <footer-email-input-component></footer-email-input-component>
    `
};

export const Default = Template.bind({});