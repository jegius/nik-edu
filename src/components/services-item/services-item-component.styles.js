export default `
    <style>
        @import url('../common.css');

        li {
            margin: 0
            padding: 0
        }

        .by-services__item::before {
            position: relative;
            bottom: .7rem;
            right: 1.625rem;
            content: "0" counter(item);
            counter-increment: item;
            color: var(--logo-and-counter-text);
            transition: color .3s ease;

        }

        .by-services__item {
            display: flex;
            flex-wrap: wrap;
            max-width: 33.4375rem;
            min-height: auto;
        }

        .by-services__item:hover::before {
            color: var(--white);
        }

        .by-services__item:hover .by-services__item-header {
            border-color: var(--white);
        }
        
        .by-services__nowrap-item {
            display: flex;
            flex-wrap: nowrap;
        }

        .text_work-sans{
            font-family: 'Work Sans', sans-serif;
        }

        .text_size_xm {
            font-size: 22px;
        }

        .text_bold {
            font-weight: 700;
        }

    </style>
`;