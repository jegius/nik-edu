import { html } from "lit-html";
import "./home-info-component.js";
import { HomeInfoComponent } from "./home-info-component.js";
import "./home-info-component.styles.js";
import "./home-info-component.template.js";
import "../common.css";

export default {
    title: "HomeInfoComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <home-info-component></home-info-component>
    `
};

export const Default = Template.bind({});