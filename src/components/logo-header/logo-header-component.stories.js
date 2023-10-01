import { html } from "lit-html";
import "./logo-header-component.js";
import { LogoHeaderComponent } from "./logo-header-component.js";
import "./logo-header-component.styles.js";
import "./logo-header-component.template.js";
import "../common.css";

export default {
    title: "LogoHeaderComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <logo-header-component></logo-header-component>
    `;
}

export const Default = Template.bind({});