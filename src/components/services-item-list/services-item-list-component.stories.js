import { html } from "lit-html";
import "./services-item-list-component.js";
import { ServicesItemListComponent } from "./services-item-list-component.js";
import "./services-item-list-component.styles.js";
import "./services-item-list-component.template.js";
import "../common.css";

export default {
    title: "ServicesItemListComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <services-item-list-component></services-item-list-component>
    `
};

export const Default = Template.bind({});