import generateStyles from './link-component.styles.js';

export default function generateTemplate(text = "", href = "#", styles, active = ""){
    return`
        ${generateStyles(styles)}
        <a class='link ${active}' href="${href}">${text}</a>
    `; 
}
