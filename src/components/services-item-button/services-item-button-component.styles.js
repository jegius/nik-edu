export default `
    <style>
        @import url('../common.css');

        input {
            margin: 0;
            padding: 0;
            border: none;
            background-color: inherit;
            color: inherit;
        }

        .button {
            cursor: pointer;
            color: var(--white);
            transform: scale(1);
            box-shadow: 0 0 0 0 var(--orange);
            text-shadow: 0 0 0 var(--bg);
            transition: transform .3s ease-in-out,
                box-shadow .3s ease,
                text-shadow .2s ease,
                background .3s ease,
                colot .5s ease;
            text-transform: capitalize;
        }

        .button:not(.by-services__button, .button_orange) {
            border-radius: 0.3125rem;
        }

        .button:hover {
            transform: scale(1.05);
            background-color: var(--bg);
        }

        .button_orange {
            background-color: var(--orange);
        }

        .button_orange:hover {
            color: var(--orange);
            text-shadow: 0 0 0.3125rem var(--orange);
            box-shadow: 0 0 3.8rem 0.9125rem var(--orange),
                inset 0 0 .2rem .1rem var(--orange);
        }

        .by-services__item-button {
            position: relative;
            bottom: 1.25rem;
            left: 1.375rem;
            width: 2.75rem;
            height: 2.75rem;
            border-radius: 2.75rem;
            stroke: var(--white);
        }

        .by-services__info-button:hover {
            stroke: var(--orange);
        }

    </style>
`;