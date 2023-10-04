export default `
    <style>
        @import url('../common.css');

        .navigation__logo {
            display: inline-flex;
            flex-wrap: nowrap;
            align-items: center;
            gap: .5rem;
        }

        .logo {
            background: var(--logo) no-repeat;
        }

        .logo__header {
            background-size: 1.75rem;
            min-width: 1.75rem;
            min-height: 1.75rem;
        }

        .logo__text {
            color: var(--logo-text);
            text-transform: capitalize;
        }

        .text_size_l {
            font-size: 24px;
        }

    </style>
`;