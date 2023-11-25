import { html } from "lit-html";
import "./button-component.js";
import { ButtonComponent } from "./button-component.js";
import "./button-component.styles.js";
import "./button-component.template.js";
import "../common.css";

export default {
    title: 'ButtonComponent',
    tags: ['autodocs'],
    argTypes: {
        buttonText: { control: 'text' },
        isActive: {
            control: { type: 'select' },
            options: ['true', 'false'],
        },
        buttonSize: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        buttonColor: {
            control: { type: 'select' },
            options: ['red', 'orange'],
        }
    }
};


const Template = (args) => { 
    return html`
    <button-component
        text=${args.buttonText}
        is-active=${args.isActive}
        size=${args.buttonSize}
        color=${args.buttonColor}
    ></button-component>
    `;
};

export const Default = Template.bind({});

Default.args = {
    isActive: "false",
    buttonText: "button",
    buttonSize: "small",
    buttonColor: "red",
};

export const RedColor = Template.bind({});

RedColor.args = {
    ...Default.args,
    buttonText: 'red color',
};

export const OrangeColor = Template.bind({});

OrangeColor.args = {
    ...Default.args,
    buttonSize: 'medium',
    buttonColor: 'orange',
    buttonText: 'orange color',
};

export const SmallSize = Template.bind({});

SmallSize.args = {
    ...Default.args,
    buttonText: 'small size',
};

export const MediumSize = Template.bind({});

MediumSize.args = {
    ...OrangeColor.args,
    buttonText: 'medium size',
};

export const LargeSize = Template.bind({});

LargeSize.args = {
    ...Default.args,
    buttonSize: 'large',
    buttonText: 'large size',
};

export const ActiveRed = Template.bind({});

ActiveRed.args = {
    ...RedColor.args,
    isActive: "true",
    buttonText: 'active red',
}
;
export const OrangeRed = Template.bind({});

OrangeRed.args = {
    ...OrangeColor.args,
    isActive: "true",
    buttonText: 'active orange',
}
