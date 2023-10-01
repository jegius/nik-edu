import { html } from "lit-html";
import "./client-list-component.js";
import { ClientListComponent } from "./client-list-component.js";
import "./client-list-component.styles.js";
import "./client-list-component.template.js";
import "../common.css";

export default {
    title: "ClientListComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <client-list-component></client-list-component>
    `
};

export const Default = Template.bind({});