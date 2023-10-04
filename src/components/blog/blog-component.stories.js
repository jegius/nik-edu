import { html } from "lit-html";
import "./blog-component.js";
import { BlogComponent } from "./blog-component.js";
import "./blog-component.styles.js";
import "./blog-component.template.js";
import "../common.css";

export default {
    title: "BlogComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <blog-component></blog-component>
    `
};

export const Default = Template.bind({});