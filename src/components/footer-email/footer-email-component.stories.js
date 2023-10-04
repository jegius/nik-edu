import { html } from "lit-html";
import "./footer-email-component.js";
import { FooterEmailComponent } from "./footer-email-component.js";
import "./footer-email-component.styles.js";
import "./footer-email-component.template.js";
import "../common.css";

export default {
    title: "FooterEmailComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <footer-email-component></footer-email-component>
    `
};

export const Default = Template.bind({});