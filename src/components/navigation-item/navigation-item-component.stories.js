import { html } from "lit-html";
import "./navigation-item-component.js";
import { NavigationItemComponent } from "./navigation-item-component.js";
import "./navigation-item-component.styles.js";
import "./navigation-item-component.template.js";
import "../common.css";

export default {
    title: "NavigationItemComponent",
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
    <navigation-item-component
        text=${args.itemText}
        is-active=${args.isActive}
        href=${args.href}
    ></navigation-item-component>
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