import { html } from "lit-html";
import "./case-studies-component.js";
import { CaseStudiesComponent } from "./case-studies-component.js";
import "./case-studies-component.styles.js";
import "./case-studies-component.template.js";
import "../common.css";

export default {
    title: "CaseStudiesComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <case-studies-component></case-studies-component>
    `
};

export const Default = Template.bind({});