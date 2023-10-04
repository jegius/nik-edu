import { html } from "lit-html";
import "./my-services-component.js";
import { MyServicesComponent } from "./my-services-component.js";
import "./my-services-component.styles.js";
import "./my-services-component.template.js";
import "../common.css";

export default {
    title: "MyServicesComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <my-services-component></my-services-component>
    `
};

export const Default = Template.bind({});