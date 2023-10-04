import styles from './home-component.styles.js';


export default `
    ${styles}
    <section class="home">
        <div class="home__base">
            <home-info-component></home-info-component>
            <home-face-component></home-face-component>
        </div>
        <home-social-component></home-social-component>
    </section>
`