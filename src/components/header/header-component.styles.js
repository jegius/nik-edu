export default `
    <style>
        @import url('../common.css');

        .navigation {
            position: sticky;
            top: 0;
            width: 100%;
            display: inline-flex;
            justify-content: space-evenly;
            align-items: center;
            align-content: center;
            flex-wrap: nowrap;
            background-color: var(--bg-header);
            padding: 2rem 0;
            margin-top: 2rem;
            white-space: nowrap;
            backdrop-filter: blur(10px);
            overflow: hidden;
            z-index: 1;
        }


    </style>
`;