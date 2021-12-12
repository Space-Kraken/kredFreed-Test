import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink(props: any) {
    return (
        <Link 
            className={`${props.style} ${props.active ? "font-bold":"font-thin"}`} 
            to={props.page}>{props.name}    
            
        </Link>
    )
}

NavLink.defaultProps = {
    style: '',
    name: 'NavLink',
    page: '/test',
    active: false
}