export default `
    <style>
        @import url('../common.css');

        a {
            color: inherit;
            text-decoration: none;
        }

        li {
            margin: 0;
            padding: 0;
        }

        .text_lato {
            font-family: 'Lato', sans-serif;
        }

        .text_extrabold {
            font-weight: 900;
        }

        .text_size_xxxl {
            font-size: 40px
        }

        .text_white {
            color: var(--white);
        }

        .home__social-item {
            display: inline-block;
            white-space: nowrap;
            text-transform: capitalize;
            text-align: center;
            font-size: 40px;
            transform: scale(1);
            text-shadow: 0 0 0;
            transition: transform .5s ease,
                text-shadow 2s ease;
        }

        .home__social-item:hover {
            transform: scale(1.5);
            text-shadow: 0 0 .5rem var(--white);
        }

    </style>
`;