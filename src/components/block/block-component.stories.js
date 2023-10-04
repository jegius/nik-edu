import { html } from "lit-html";
import "./block-component.js";
import { BlockComponent } from "./block-component.js";
import "./block-component.styles.js";
import "./block-component.template.js";
import "../common.css";

export default {
    title: "BlockComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <block-component></block-component>
    `
};

export const Default = Template.bind({});