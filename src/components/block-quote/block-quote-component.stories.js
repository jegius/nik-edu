import { html } from "lit-html";
import "./block-quote-component.js";
import { BlockQuoteComponent } from "./block-quote-component.js";
import "./block-quote-component.styles.js";
import "./block-quote-component.template.js";
import "../common.css";

export default {
    title: "BlockQuoteComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <block-quote-component></block-quote-component>
    `
};

export const Default = Template.bind({});