import React from 'react'
import './footer.scss'
import { ArrFilm, ColorFilm} from '../../costants'

const FilmMap = ArrFilm.map((namefilm,index)=>{
    return (
        <li key={index}>
            <div className={`${ColorFilm[index]}`}></div>
            <span>{namefilm}</span>
        </li>
    )
})

const Footer = () => {
    return (
        <div className="footer">
            <ul>
                {FilmMap}
            </ul>
        </div>
    )
}

export default Footer