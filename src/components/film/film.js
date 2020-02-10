import React from 'react'
import './film.scss'

const Film = (props) => {
    const { src, alt, title } = props
    return (
        <div>
            <h3>{title}</h3>
            <div><img src={src} alt={alt} ></img></div>
        </div>
    )
}
export default Film