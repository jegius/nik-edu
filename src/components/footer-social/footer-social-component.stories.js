import { html } from "lit-html";
import "./footer-social-component.js";
import { FooterSocialComponent } from "./footer-social-component.js";
import "./footer-social-component.styles.js";
import "./footer-social-component.template.js";
import "../common.css";

export default {
    title: "FooterSocialComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <footer-social-component></footer-social-component>
    `
};

export const Default = Template.bind({});