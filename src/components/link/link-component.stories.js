import { html } from "lit-html";
import "./link-component.js";
import { action } from "@storybook/addon-actions";
import { LinkComponent } from "./link-component.js";
import "./link-component.styles.js";
import "./link-component.template.js";
import "../common.css";
import events from "../api/events.js";

export default {
    title: "LinkComponent",
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: "clicked" },
        linkText: { control: 'text' },
        href: { control: 'text' },
        isActive: {
            control: { type:'select' },
            options: ['true', 'false']
        },
        styles: {
            control: { type:'select' },
            options: ['nav', 'social']
        }
    }
};

const Template = (args) => {
    document.addEventListener(events.LINK_CLICKED, action(events.LINK_CLICKED));
    return html`
    <link-component
        text=${args.linkText}
        is-active=${args.isActive}
        href=${args.href}
        styles=${args.styles}
    ></link-component>
    `
};

const TemplateWithScroll = (args) => html`
    <style>
        @import url(../common.css);

        .section {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 20rem;
            border: .125rem dashed white;
            margin-top: 1rem;
            font-size: 144px;
            color: red;
        }

        .section:nth-child(odd) {
            background-color: var(--block-color);
        }

        .wrapper {
            position: relative;
            height: 20rem;
            padding: 2rem;
            overflow-y: scroll;
        }
    </style>
    <div class="wrapper">
        <link-component
            is-active=${args.isActive}
            text=${args.linkText}
            href=${args.href}
            styles=${args.styles}
        ></link-component>
        <div class="section"></div>
        <div class="section" id="test"><p>TEST</p></div>
    </div>
`;

export const Default = Template.bind({});

Default.args = {
    isActive: "false",
    linkText: "item text",
    href: "#",
    styles: "nav",
}

export const Active = Template.bind({});

Active.args = {
    ...Default.args,
    linkText: "active text",
    isActive: "true",
}

export const WithScroll = TemplateWithScroll.bind({});

WithScroll.args = {
    isActive: "false",
    linkText: "test",
    href: "#test",
    styles: "nav",
}