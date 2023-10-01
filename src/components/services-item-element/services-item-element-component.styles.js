export default `
    <style>
        @import url('../common.css');

        li {
            margin: 0;
            padding: 0;
            list-style-type: none
        }

        .text_work-sans {
            font-family: 'Work Sans', sans-serif;
        }

        .text_size_m {
            font-size: 18px;
        }

        .text_regular {
            font-weight: 400;
        }

        .by-services__item-element {
            color: var(--by-service-element);
            text-transform: capitalize;
            white-space: nowrap;
            cursor: default;
            transition: color .3s ease;
        }

        .by-services__item-element:hover {
            color: var(--by-service-element-hover);
        }

        .by-services__item-element::before {
            position: relative;
            top: .125rem;
            right: .75rem;
            content: var(--by-services-check-mark-img);
            vertical-align: center;
        }

    </style>
`;