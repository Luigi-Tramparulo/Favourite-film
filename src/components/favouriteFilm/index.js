import React, { Component } from 'react'
import PieChart from 'react-minimal-pie-chart';
import './favouriteFilm.scss'  


class FavouriteFilm extends Component {  

 
    render() {
               
        return (
            <PieChart
                data={[
                    { title: 'Il gladiatore', value: this.props.gladiatoreVotes, color: '#E38627'},
                    { title: 'Una settimana da Dio', value: this.props.unasettimanadadioVotes, color: '#C13C37' },
                    { title: 'VanHelsing', value: this.props.vanhelsingVotes, color: '#6A2135' },
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

export default FavouriteFilm