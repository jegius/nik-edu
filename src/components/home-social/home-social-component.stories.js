import { html } from "lit-html";
import "./home-social-component.js";
import { HomeSocialComponent } from "./home-social-component.js";
import "./home-social-component.styles.js";
import "./home-social-component.template.js";
import "../common.css";

export default {
    title: "HomeSocialComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <home-social-component></home-social-component>
    `
};

export const Default = Template.bind({});