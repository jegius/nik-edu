import { html } from "lit-html";
import "./sentence-component.js";
import { SentenceComponent } from "./sentence-component.js";
import "./sentence-component.styles.js";
import "./sentence-component.template.js";
import "../common.css";

export default {
    title: "SentenceComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <sentence-component></sentence-component>
    `
};

export const Default = Template.bind({});