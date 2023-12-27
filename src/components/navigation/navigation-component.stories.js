import { html } from "lit-html";
import "./navigation-component.js";
import { NavigationComponent } from "./navigation-component.js";
import "./navigation-component.styles.js";
import "./navigation-component.template.js";
import "../common.css";
import "../link/link-component.js";
import "../link/link-component.template.js";
import "../link/link-component.template.js";

export default {
    title: "NavigationComponent",
    tags: ['autodocs'],
};

const Template = () => {
    return html`
    <navigation-component>
        <link-component is-active="true" text="first" href="#" styles="nav"></link-component>
        <link-component is-active="false" text="second" href="#" styles="nav"></link-component>
        <link-component is-active="false" text="third" href="#" styles="nav"></link-component>
        <link-component is-active="false" text="fourth" href="#" styles="nav"></link-component>
        <link-component is-active="false" text="fifth" href="#" styles="nav"></link-component>
    </navigation-component>
    `
};

const TemplateWithScrollDetection = () => {
    return html` 
    <style>
        @import url(../common.css);

        .header {
            width: 100%;
            position: sticky;
            top: 0;
            z-index: 2;
        }

        .section {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 144px;
            font-weight: 700;
            color: red;
            height: 30rem;
            border: .125rem dashed white;
            margin-top: 1rem;
        }

        .section:nth-child(odd) {
            background-color: var(--block-color);
            color: orange;
        }

        .wrapper {
            position: relative;
            height: 20rem;
            padding: 0 2rem;
            overflow-y: scroll;
        }
    </style>
    <div class="wrapper _scrollable">
        <div class="header">
            <navigation-component>
                <link-component
                    is-active="true"
                    text="first"
                    styles="nav"
                    href="#first"
                ></link-component>
                <link-component
                    is-active="false"
                    text="second"
                    styles="nav"
                    href="#second"
                ></link-component>
                <link-component
                    is-active="false"
                    text="third"
                    styles="nav"
                    href="#third"
                ></link-component>
                <link-component
                    is-active="false"
                    text="fourth"
                    styles="nav"
                    href="#fourth"
                ></link-component>
                <link-component
                    is-active="false"
                    text="fifth"
                    styles="nav"
                    href="#fifth"
                ></link-component>
            </navigation-component>
        </div>
        <div class="section" id="first">
            <span>first</span>
        </div>
        <div class="section" id="second">
            <span>second</span>
        </div>
        <div class="section" id="third">
            <span>third</span>
        </div>
        <div class="section" id="fourth">
            <span>fourth</span>
        </div>
        <div class="section" id="fifth">
            <span>fifth</span>
        </div>
    `
}

export const Default = Template.bind({});

export const WithScrollDetection = TemplateWithScrollDetection.bind({});