const font = {
    size: '16px',
    family: "Poppins",
};

const Colors = {
    sesame: '#202020',
    plum: '#4F1C48',
    ocean: '#304A81',
    neon: '#D6E307',
    eggshell: '#D8D8D8',
}

/**
 * Font sizes generated by:
 * https://type-scale.com/
 */

const GlobalTheme = {
    breakpoints: ['33.75em', '48em', '68.75em'],
    fonts: {
        body: `${font.family}, sans-serif`,
        heading: 'inherit',
    },
    fontSizes: ['0.75rem', '1rem', '1.05rem', '1.563rem', '1.952rem', '2.441rem', '3.052rem'],
    fontWeights: {
        body: 300,
        bold: 500,
        heading: 700
    },
    lineHeights: {
        body: 1.65,
        heading: 1.15,
    },
    fontStyle: {
        heading: 'italic'
    },
    colors: {
        text: Colors.eggshell,
        background: Colors.sesame,
        primary: Colors.neon,
    },
    text: {
        heading: {
            fontFamily: 'heading',
            lineHeight: 'heading',
            fontWeight: 'heading',  
            fontStyle: 'heading'          
        },
    },
    styles: {
        layout: {
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto',
            padding: '0 73px',
        },
        root: {
            color: 'text',
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
        },
        h1: {
            variant: 'text.heading',
            fontSize: 6,
            lineHeight: '3.125rem'
        },
        h2: {
            fontSize: 5,            
            variant: 'text.heading',            
        },
        h3: {
            variant: 'text.heading',
            fontSize: 4,
        },
        h4: {
            variant: 'text.heading',
            fontSize: 3,
        },
        h5: {
            variant: 'text.heading',
            fontSize: 2,
        },
        small: {
            fontSize: 0,
        },
        a: {
            color: 'primary',
            'transition': '150ms ease-out',
            '&:hover': {
                opacity: .85
              }            
        },
    }
}
const BlogTheme = {
    ...GlobalTheme,
    colors: {
        text: Colors.sesame,
        background: Colors.eggshell,
        primary: Colors.plum
    },
}

export { GlobalTheme, BlogTheme, Colors };