/** @jsx jsx */
import { jsx } from 'theme-ui'

import React, { ReactChild } from "react"
import { Colors } from '../theme/theme'

/**
 * Button
 * @param prop 
 */
const Button: React.FC<{
    children?: ReactChild,
    flavor: 'default' | 'link',
    selected?: boolean,
    onClick?: (e) => void
}> = ({ children, flavor, selected, onClick }) => {

    const defaultStyles = {
        display: 'block',
        border: 'none',
        boxSizing: 'border-box' as any,
        textDecoration: 'none',
        padding: '10px 25px',
        cursor: 'pointer',
        textTransform: 'uppercase' as any,
        letterSpacing: '1px',
        borderRadius: '6px',
        transition: '100ms ease-in opacity',
        background: `${Colors.neon}`,
        color: `${Colors.sesame}`,
        '&:hover': {
            opacity: 0.85
        }
    }

    const linkStyles = {
        textAlign: 'initial' as any,
        background: 'inherit',
        border: 'none',
        textDecoration: 'none',
        transition: 'text-shadow 300ms ease-out, color 250ms ease-out',
        color: 'primary',

        '&:hover, &:focus': {
            textShadow: '1px 1px 1px rgb(0,0,0,.5)',
            color: `${Colors.eggshell}`,
            cursor: 'pointer',
        },
        '&:focus': {
            outline: 'none',
        },
        ...(selected && { color: `${Colors.eggshell}` })
    }
    
    let styles = flavor === 'link' ? linkStyles : defaultStyles;

    return (
        <button 
            type="button" 
            sx={styles}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button
