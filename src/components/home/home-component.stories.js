import { html } from "lit-html";
import "./home-component.js";
import { HomeComponent } from "./home-component.js";
import "./home-component.styles.js";
import "./home-component.template.js";
import "../common.css";

export default {
    title: "HomeComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <home-component></home-component>
    `
};

export const Default = Template.bind({});