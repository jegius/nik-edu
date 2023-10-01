import { html } from "lit-html";
import "./main-site-component.js";
import { MainSiteComponent } from "./main-site-component.js";
import "./main-site-component.styles.js";
import "./main-site-component.template.js";
import "../common.css";

export default {
    title: "MainSiteComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <main-site-component></main-site-component>
    `
};

export const Default = Template.bind({});