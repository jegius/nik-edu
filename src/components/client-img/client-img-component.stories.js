import { html } from "lit-html";
import "./client-img-component.js";
import { ClientImgComponent } from "./client-img-component.js";
import "./client-img-component.styles.js";
import "./client-img-component.template.js";
import "../common.css";

export default {
    title: "ClientImgComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <client-img-component></client-img-component>
    `
};

export const Default = Template.bind({});