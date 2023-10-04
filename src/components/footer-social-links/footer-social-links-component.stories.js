import { html } from "lit-html";
import "./footer-social-links-component.js";
import { FooterSocialLinksComponent } from "./footer-social-links-component.js";
import "./footer-social-links-component.styles.js";
import "./footer-social-links-component.template.js";
import "../common.css";

export default {
    title: "FooterSocialLinksComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <footer-social-links-component></footer-social-links-component>
    `
};

export const Default = Template.bind({});