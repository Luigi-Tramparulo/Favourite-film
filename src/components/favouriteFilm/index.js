import React, { Component } from 'react'
import PieChart from 'react-minimal-pie-chart';
import {connect} from 'react-redux'
import './favouriteFilm.scss'  


class FavouriteFilm extends Component {  

 
    render() {
               
        return (
            <PieChart
                data={[
                    { title: 'Il gladiatore', value: this.props.ilgladiatorevote, color: '#E38627'},
                    { title: 'Una settimana da Dio', value: this.props.unasettimanadadiovote, color: '#C13C37' },
                    { title: 'VanHelsing', value: this.props.vanhelsingvote, color: '#6A2135' },
                ]}

                style={{
                    height: '300px'
                  }} 
                  
                  label                             
                  labelStyle={{
                    fill: 'white',
                    fontFamily: 'sans-serif',
                    fontSize: '10px'
                  }}
               
            />

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return{        
        ilgladiatorevote: state.film.ilgladiatore,
        unasettimanadadiovote: state.film.unasettimanadadio,
        vanhelsingvote: state.film.vanhelsing,    
    }
}

export default connect(mapStateToProps)(FavouriteFilm)