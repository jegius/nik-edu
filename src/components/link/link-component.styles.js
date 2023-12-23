export default function generateStyles(selectedStyles) {
    let style = "";
    let styleHover = "";  


    switch(selectedStyles) {
        case "nav": 
            style = "font-family: 'Work-Sans', sans-serif;\
                     font-size: 18px;"
            styleHover = "transform: scale(1.2);\
                          color: var(--orange);"
            break
        
        case "social":
            style = "font-family: 'Lato', sans-serif;\
                     font-size: 40px;"
            styleHover = "transform: scale(1.2);\
                          text-shadow: 0 0 .5rem var(--white);"
            break

    }

    return`
    <style>    
        @import url('../common.css');

        a {
            color: inherit;
            text-decoration: none;
        }

        .link {
            display: inline-block;
            ${style}
            white-space: nowrap;
            text-transform: capitalize;
            color: var(--white);
            font-weight: 500;
            cursor: pointer;
            transform: scale(1);
            transition: transform .3s ease-in-out, color .1s linear, text-shadow .1s ease;
        }
    
        .link:hover {
            ${styleHover}
        }

        ._active {
            color: var(--orange);
            border-bottom: 1px solid var(--orange);
        }

    </style>
`
}