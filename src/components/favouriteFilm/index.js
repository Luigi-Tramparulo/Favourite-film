import React, { Component } from 'react'
import PieChart from 'react-minimal-pie-chart'
import { connect } from 'react-redux'
import './favouriteFilm.scss'
class FavouriteFilm extends Component {

    render() {
        const dataChart = [
            { title: 'Il gladiatore', value: this.props.ilgladiatorevote, color: '#E38627', dataIndex:0 },
            { title: 'Una settimana da Dio', value: this.props.unasettimanadadiovote, color: '#C13C37', dataIndex: 1 },
            { title: 'VanHelsing', value: this.props.vanhelsingvote, color: '#6A2135', dataIndex: 3 },
        ]

        return (
            <div className="pie-chart">
                <PieChart
                    animate
                    animationDuration={1000}
                    animationEasing="ease-out"
                    data={dataChart}

                    style={{
                        height: '300px'
                    }}

                    label
                    labelStyle={{
                        fill: 'white',
                        fontFamily: 'sans-serif',
                        fontSize: '8px'
                    }}
                />
                <h3>Il totale dei voti è : {`${this.props.totalvote}`}</h3>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        ilgladiatorevote: state.film.ilgladiatore,
        unasettimanadadiovote: state.film.unasettimanadadio,
        vanhelsingvote: state.film.vanhelsing,
        totalvote: state.film.total
    }
}

export default connect(mapStateToProps)(FavouriteFilm)