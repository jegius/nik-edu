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
            font-size: 16px;
            font-family: 'Lato', sans-serif;
            font-weight: 500;
            box-shadow: 0 0 0 0 var(--orange);
            text-shadow: 0 0 0 var(--bg);
            transition: transform .3s ease-in-out,
                box-shadow .3s ease,
                text-shadow .2s ease,
                background .3s ease,
                colot .5s ease;
            text-transform: capitalize;
        }

        .button:not(._orange) {
            border-radius: 0.3125rem;
        }

        .button:hover {
            transform: scale(1.1);
            background-color: inherit;
        }

        .button._active {
            transform: scale(1.1);
            background-color: inherit;
        }

        ._active._red {
            color: var(--red);
            text-shadow: 0 0 0.3125rem var(--red);
            box-shadow: 0 0 1.8rem 0.1125rem var(--red);
        }


        ._active._orange {
            color: var(--orange);
            text-shadow: 0 0 0.3125rem var(--orange);
            box-shadow: 0 0 3.8rem 0.9125rem var(--orange),
                inset 0 0 .2rem .1rem var(--orange);
        }

        ._small {
            padding: .7rem 1.2rem;
        }
       
        ._medium {
            padding: 1rem 1.5rem;
            font-size: 14px;
        }

        ._large {
            padding: 1.5rem 2rem;
            font-size: 34px;
            font-weight: 900;
        }

        ._red {
            background-color: var(--red);
        } 

        ._red:hover {
            color: var(--red);
            text-shadow: 0 0 0.3125rem var(--red);
            box-shadow: 0 0 1.8rem 0.1125rem var(--red);
        }


        ._orange {
            background-color: var(--orange);
            text-transform: uppercase;
        }

        ._orange:hover {
            color: var(--orange);
            text-shadow: 0 0 0.3125rem var(--orange);
            box-shadow: 0 0 3.8rem 0.9125rem var(--orange),
                inset 0 0 .2rem .1rem var(--orange);
        }
            
    </style>
`;