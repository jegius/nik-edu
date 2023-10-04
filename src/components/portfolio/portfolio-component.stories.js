import { html } from "lit-html";
import "./portfolio-component.js";
import { PortfolioComponent } from "./portfolio-component.js";
import "./portfolio-component.styles.js";
import "./portfolio-component.template.js";
import "../common.css";

export default {
    title: "PortfolioComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <portfolio-component></portfolio-component>
    `
};

export const Default = Template.bind({});