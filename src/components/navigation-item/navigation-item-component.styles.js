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
        display: inline-block;
        white-space: nowrap;
        text-transform: capitalize;
        font-family: 'Work Sans', sans-serif;
        font-weight: 500;
        font-size: 18px;
        color: var(--white);
        text-shadow: 0 0 0;
        cursor: pointer;
        line-height: 2.25rem;
        transform: scale(1);
        transition: transform .3s ease-in-out,
            box-shadow .3s ease-out,
            color .1s ease;
    }

    .navigation__item:hover {
        text-shadow: 0 0 .4rem var(--orange);
        color: var(--orange);
        transform: scale(1.2);
    }

    ._active {
        color: var(--orange);
        border-bottom: 1px solid var(--orange);
    }

</style>
`;