import React, { Component } from 'react'
import axios from 'axios';
import './film.scss'
import Film from './film.js'

class FilmRender extends Component {
    constructor(props) {
        super(props)
        this.state = {
            res: []
        }
    }
    fetchFilm = imdb => {
        let arrFilm
        axios.get(`http://www.omdbapi.com/?apikey=ac9b1a49&i=${imdb}`)
            .then(response => {
                let rest = response;
                arrFilm = rest
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(() => (
                this.setState(
                    (state) => ({ res: [...state.res, arrFilm] })
                )
            ))
    }
    componentDidMount() {
        this.fetchFilm('tt0172495')
        this.fetchFilm('tt0315327')
        this.fetchFilm('tt0338526')
    }

    render() {
        const { res } = this.state
        if (!this.state.res.length)
            return null;

        let Films = res.map((obj, i) => (
            <Film key={i} src={obj.data["Poster"]} alt={obj.data["Title"]} title={obj.data["Title"]} />
        ))
        return (
            <div className="film-container">
                {Films}
            </div>
        )
    }
}


export default FilmRender
