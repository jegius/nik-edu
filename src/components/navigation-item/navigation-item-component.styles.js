export default `
<style>    
    @import url('../common.css');

    li {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .navigation__item {
        white-space: nowrap;
        display: inline-block;
        text-transform: capitalize;
        text-shadow: 0 0 0;
        cursor: pointer;
        line-height: 2.25rem;
        transition: font-size .3s ease-in-out,
            box-shadow .3s ease-out,
            color .1s ease;
    }

    .navigation__item:hover {
        text-shadow: 0 0 .4rem var(--orange);
        color: var(--orange);
        font-size: 36px;
    }

    .navigation__item_active {
        color: var(--orange);
        border-bottom: 1px solid var(--orange);
    }

    .text_white {
        color: var(--white); 
    }

    .text_work-sans {
        font-family: 'Work Sans', sans-serif;
        font-weight: 500;
    }

    .text_size_m {
        font-size: 18px;
    }

</style>
`;