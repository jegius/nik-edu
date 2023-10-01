import { html } from "lit-html";
import "./navigation-item-component.js";
import { NavigationItemComponent } from "./navigation-item-component.js";
import "./navigation-item-component.styles.js";
import "./navigation-item-component.template.js";
import "../common.css";

export default {
    title: "NavigationItemComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <navigation-item-component></navigation-item-component>
    `
};

export const Default = Template.bind({});