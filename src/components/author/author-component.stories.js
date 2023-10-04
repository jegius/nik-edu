import { html } from "lit-html";
import "./author-component.js";
import { AuthorComponent } from "./author-component.js";
import "./author-component.styles.js";
import "./author-component.template.js";
import "../common.css";

export default {
    title: "AuthorComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <author-component></author-component>
    `
};

export const Default = Template.bind({});