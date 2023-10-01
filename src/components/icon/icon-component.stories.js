import { html } from "lit-html";
import "./icon-component.js";
import { IconComponent } from "./icon-component.js";
import "./icon-component.styles.js";
import "./icon-component.template.js";
import "../common.css";

export default {
    title: "IconComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <icon-component></icon-component>
    `;
}

export const Default = Template.bind({});