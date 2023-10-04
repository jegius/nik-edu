import { html } from "lit-html";
import "./home-social-item-component.js";
import { HomeSocialItemComponent } from "./home-social-item-component.js";
import "./home-social-item-component.styles.js";
import "./home-social-item-component.template.js";
import "../common.css";

export default {
    title: "HomeSocialItemComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <home-social-item-component></home-social-item-component>
    `
};

export const Default = Template.bind({});