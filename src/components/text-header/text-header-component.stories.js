import { html } from "lit-html";
import "./text-header-component.js";
import { TextHeaderComponent } from "./text-header-component.js";
import "./text-header-component.styles.js";
import "./text-header-component.template.js";
import "../common.css";

export default {
    title: "TextHeaderComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <text-header-component></text-header-component>
    `;
}

export const Default = Template.bind({});