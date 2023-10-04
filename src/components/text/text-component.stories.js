import { html } from "lit-html";
import "./text-component.js";
import { TextComponent } from "./text-component.js";
import "./text-component.styles.js";
import "./text-component.template.js";
import "../common.css";

export default {
    title: "TextComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <text-component></text-component>
    `;
}

export const Default = Template.bind({});