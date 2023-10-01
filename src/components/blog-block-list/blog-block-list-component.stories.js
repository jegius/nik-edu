import { html } from "lit-html";
import "./blog-block-list-component.js";
import { BlogBlockListComponent } from "./blog-block-list-component.js";
import "./blog-block-list-component.styles.js";
import "./blog-block-list-component.template.js";
import "../common.css";

export default {
    title: "BlogBlockListComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <blog-block-list-component></blog-block-list-component>
    `
};

export const Default = Template.bind({});