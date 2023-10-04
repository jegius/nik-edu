import { html } from "lit-html";
import "./portfolio-img-component.js";
import { PortfolioImgComponent } from "./portfolio-img-component.js";
import "./portfolio-img-component.styles.js";
import "./portfolio-img-component.template.js";
import "../common.css";

export default {
    title: "PortfolioImgComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <portfolio-img-component></portfolio-img-component>
    `
};

export const Default = Template.bind({});