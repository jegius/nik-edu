import { html } from "lit-html";
import "./blog-block-component.js";
import { BlogBlockComponent } from "./blog-block-component.js";
import "./blog-block-component.styles.js";
import "./blog-block-component.template.js";
import "../common.css";

export default {
    title: "BlogBlockComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <blog-block-component></blog-block-component>
    `
};

export const Default = Template.bind({});