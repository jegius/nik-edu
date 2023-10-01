import { html } from "lit-html";
import "./home-face-component.js";
import { HomeFaceComponent } from "./home-face-component.js";
import "./home-face-component.styles.js";
import "./home-face-component.template.js";
import "../common.css";

export default {
    title: "HomeFaceComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <home-face-component></home-face-component>
    `;
}

export const Default = Template.bind({});