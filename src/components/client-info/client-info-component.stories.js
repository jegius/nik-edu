import { html } from "lit-html";
import "./client-info-component.js";
import { ClientInfoComponent } from "./client-info-component.js";
import "./client-info-component.styles.js";
import "./client-info-component.template.js";
import "../common.css";

export default {
    title: "ClientInfoComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <client-info-component></client-info-component>
    `
};

export const Default = Template.bind({});