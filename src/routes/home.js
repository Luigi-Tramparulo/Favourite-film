import React from 'react'
import VoteFilm from '../components/voteFilm/voteFilm.js'
import FilmRender from '../components/film/index'
import Footer from '../components/footer'

const Home = () => {
    return (
        <React.Fragment>
            <VoteFilm />
            <FilmRender />
            <Footer />
        </React.Fragment>
    )
}

export default Home