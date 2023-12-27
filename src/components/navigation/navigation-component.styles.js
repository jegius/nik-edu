export default `
    <style>
        @import url('../common.css');

        ul {
            margin: 0;
            padding: 0;
        }

        .navigation {
            display: flex;
            width: 100%;
            align-items: center;
            flex-wrap: nowrap;
            background-color: var(--bg-header);
            padding: 2rem 0;
            white-space: nowrap;
        }


        .navigation__list {
            display: flex;
            justify-content: space-evenly;
            flex-grow: 1;
            gap: 3rem;
            list-style: none;
        }

    </style>
`;