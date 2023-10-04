import { html } from "lit-html";
import "./block-header-component.js";
import { BlockHeaderComponent } from "./block-header-component.js";
import "./block-header-component.styles.js";
import "./block-header-component.template.js";
import "../common.css";

export default {
    title: "BlockHeaderComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <block-header-component></block-header-component>
    `;
}

export const Default = Template.bind({});