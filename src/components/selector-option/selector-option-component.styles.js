export default `
    <style>
        @import url('../common.css');

        .blog__option {
            width: 1.3125rem;
            height: .3125rem;
            border: .0625rem solid var(--blog-selector-color);
            box-shadow: 0 0 0 0 var(--blog-selector-active-color);
            border-radius: .1rem;
            transform: scale(1);
            transition: transform .3s ease,
                border-color .3s ease,
                box-shadow .3s ease-in;
        }

        .blog__option:hover {
            transform: scale(1.1);
            border-color: var(--blog-selector-active-color);
            box-shadow: 0 0 .3rem 0 var(--blog-selector-active-color);
        }

        .option_active {
            border: .0825rem solid var(--blog-selector-active-color);
            background-color: var(--blog-selector-active-color);
        }
        
    </style>
`;