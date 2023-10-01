export default `
    <style>
        @import url('../common.css');
        
        .my-services__block {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            max-width: 18.125rem;
            padding: 3rem 2.5rem;
            background-color: var(--block-color);
            transform: scale(1);
            transition: transform .3s ease;
        }

        .my-services__block:hover {
            transform: scale(1.1);
        }
        
    </style>
`;