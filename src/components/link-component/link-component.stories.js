import { html } from "lit-html";
import "./link-component.js";
import { LinkComponent } from "./link-component.js";
import "./link-component.styles.js";
import "./link-component.template.js";
import "../common.css";

export default {
    title: "LinkComponent",
    tags: ['autodocs'],
    argTypes: {
        itemText: { control: 'text' },
        href: { control: 'text' },
        isActive: {
            control: { type:'select' },
            options: ['true', 'false']
        },
    }
};

const Template = (args) => {
    return html`
    <link-component
        text=${args.itemText}
        is-active=${args.isActive}
        href=${args.href}
    ></link-component>
    `
};

export const Default = Template.bind({});

Default.args = {
    isActive: "false",
    itemText: "item text",
    href: "#",
}

export const Active = Template.bind({});

Active.args = {
    itemText: "active text",
    isActive: "true",
    href: "#",
}