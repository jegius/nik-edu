export default `
<style>    
    @import url('../common.css');

    a {
        color: inherit;
        text-decoration: none;
    }

    .link {
        display: inline-block;
        white-space: nowrap;
        text-transform: capitalize;
        color: var(--white);
        font-family: 'Work Sans', sans-serif;
        font-weight: 500;
        font-size: 18px;
        cursor: pointer;
        transform: scale(1);
        transition: transform .3s ease-in-out, color .1s linear;
    }
   
    .link:hover {
        transform: scale(1.2);
        color: var(--orange);
    }

    ._active {
        color: var(--orange);
        border-bottom: 1px solid var(--orange);
    }

</style>
`;