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
            border-radius: 0.3125rem;
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

        .button:hover {
            transform: scale(.9);
            background-color: inherit;
        }

        .button_size_s {
            padding: .7rem 1.2rem;
        }

        .button_red {
            background-color: var(--red);
        } 

        .button_red:hover {
            color: var(--red);
            text-shadow: 0 0 0.3125rem var(--red);
            box-shadow: 0 0 1.8rem 0.1125rem var(--red);
            
    </style>
`;