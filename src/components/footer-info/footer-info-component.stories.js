import { html } from "lit-html";
import "./footer-info-component.js";
import { FooterInfoComponent } from "./footer-info-component.js";
import "./footer-info-component.styles.js";
import "./footer-info-component.template.js";
import "../common.css";

export default {
    title: "FooterInfoComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <footer-info-component></footer-info-component>
    `
};

export const Default = Template.bind({});