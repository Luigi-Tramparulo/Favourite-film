import React  from 'react';
import {connect} from 'react-redux'
import FavouriteFilm from '../favouriteFilm';
import './winnerFilm.scss'
import Footer from '../footer'

const WinnerFilm = (props) =>{

    const {film,ilgladiatorevote,unasettimanadadiovote,vanhelsingvote} = props;
      
    return(
        <div className="winner-film">
            <h1 className="title-winner">{`Il film più votato è ${film}`}</h1>            
            <FavouriteFilm 
            gladiatoreVotes={ilgladiatorevote} 
            unasettimanadadioVotes={unasettimanadadiovote}
            vanhelsingVotes={vanhelsingvote}
            />
            <Footer />
        </div>
    )
}

const sortWinnerFilm = (obj) =>{

    let sortable = []
    for (let film in obj) {
        if(film !== 'total')
        sortable.push([film, obj[film]]);
    }
    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });
    return sortable[sortable.length-1][0]

}


const mapStateToProps = (state, ownProps) => {
    return{
        film: sortWinnerFilm(state.film), 
        ilgladiatorevote: state.film.ilgladiatore,
        unasettimanadadiovote: state.film.unasettimanadadio,
        vanhelsingvote: state.film.vanhelsing,          
    }
}


export default connect(mapStateToProps)(WinnerFilm)