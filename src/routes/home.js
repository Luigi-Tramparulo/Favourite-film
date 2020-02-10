import React from 'react'
import VoteFilm from '../components/voteFilm'
import FilmRender from '../components/film/index'

const Home = () => {
    return (
        <React.Fragment>
            <VoteFilm />
            <FilmRender />
        </React.Fragment>
    )
}

export default Home