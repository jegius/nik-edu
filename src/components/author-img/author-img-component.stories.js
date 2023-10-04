import { html } from "lit-html";
import "./author-img-component.js";
import { AuthorImgComponent } from "./author-img-component.js";
import "./author-img-component.styles.js";
import "./author-img-component.template.js";
import "../common.css";

export default {
    title: "AuthorImgComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <author-img-component></author-img-component>
    `
};

export const Default = Template.bind({});