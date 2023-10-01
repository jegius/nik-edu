import { html } from "lit-html";
import "./author-info-component.js";
import { AuthorInfoComponent } from "./author-info-component.js";
import "./author-info-component.styles.js";
import "./author-info-component.template.js";
import "../common.css";

export default {
    title: "AuthorInfoComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <author-info-component></author-info-component>
    `
};

export const Default = Template.bind({});