import { html } from "lit-html";
import "./section-header-component.js";
import { SectionHeaderComponent } from "./section-header-component.js";
import "./section-header-component.styles.js";
import "./section-header-component.template.js";
import "../common.css";

export default {
    title: "SectionHeaderComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <section-header-component></-component>
    `
};

export const Default = Template.bind({});