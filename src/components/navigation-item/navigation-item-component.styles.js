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

    .navigation-item {
        display: inline-block;
        cursor: pointer;
        transform: scale(1);
        transition: transform .3s ease-in-out;
    }

    .navigation-item__link {
        white-space: nowrap;
        text-transform: capitalize;
        color: var(--white);
        text-shadow: 0;
        font-family: 'Work Sans', sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 2.25rem;
        transition: color .1s ease;
    }
   
    .navigation-item:hover {
        transform: scale(1.2)
    }

    .navigation-item__link:hover {
        text-shadow: 0 0 .4rem var(--orange);
        color: var(--orange);
    }

    ._active {
        color: var(--orange);
        border-bottom: 1px solid var(--orange);
    }

</style>
`;