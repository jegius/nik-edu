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

        .text_size_22 {
            font-size: 22px;
        }

        .text_light {
            font-weight: 300;
        }

        .text_open-sans {
            font-family: 'Open Sans', sans-serif;
        }

        .text_white {
            color: var(--white);
        }

        .footer__email-input {
            padding: 0.9375rem 7.4375rem 1rem 1.4375rem;
            border: 0.0625rem solid var(--border-color-email-input);
        }

        .footer__email-input::placeholder {
            color: var(--white);
        }
        
    </style>
`;