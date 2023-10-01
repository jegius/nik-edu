import styles from './services-item-component.styles.js';


export default `
    ${styles}
    <li class="by-services__item text_work-sans text_size_xm text_bold">
        <div class="by-services__nowrap-item">
            <services-item-header-component></services-item-header-component>
            <services-item-button-component></services-item-button-component>
        </div>
        <services-item-list-component></services-item-list-component>
    </li>
`