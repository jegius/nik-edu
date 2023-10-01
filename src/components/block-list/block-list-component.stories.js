import { html } from "lit-html";
import "./block-list-component.js";
import { BlockListComponent } from "./block-list-component.js";
import "./block-list-component.styles.js";
import "./block-list-component.template.js";
import "../common.css";

export default {
    title: "BlockListComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <block-list-component></block-list-component>
    `
};

export const Default = Template.bind({});