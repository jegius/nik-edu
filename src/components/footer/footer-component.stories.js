import { html } from "lit-html";
import "./footer-component.js";
import { FooterComponent } from "./footer-component.js";
import "./footer-component.styles.js";
import "./footer-component.template.js";
import "../common.css";

export default {
    title: "FooterComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <footer-component></footer-component>
    `
};

export const Default = Template.bind({});