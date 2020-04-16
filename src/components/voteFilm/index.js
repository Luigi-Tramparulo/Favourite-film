import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { connect } from 'react-redux'
import { IL_GLADIATORE, UNA_SETTIMANA_DA_DIO, VAN_HELSING } from '../../costants'
import { counterVote } from '../../action/index'
import './voteFilm.scss'
import FavouriteFilm from '../favouriteFilm'

class VoteFilm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clicked: false
        }
    }
    handleClick = (action) => {
        action();
        this.setState({
            clicked: true
        })
    }
    addFavouriteFilm = () => {
        if (this.state.clicked) {
            return <FavouriteFilm />
        } else {
            return null
        }
    }

    render() {
        const { ilgladiatore, unasettimanadadio, vanhelsing } = this.props
        return (
            <div className="button-wrapper">
                <h3>Seleziona il tuo film preferito</h3>
                <div className="button-film">
                    <Button className="m-2" color="warning" onClick={() => { this.handleClick(ilgladiatore) }} size="lg">Il Gladiatore</Button>
                    <Button className="m-2" color="warning" onClick={() => { this.handleClick(unasettimanadadio) }} size="lg">Una settimana da Dio</Button>
                    <Button className="m-2" color="warning" onClick={() => { this.handleClick(vanhelsing) }} size="lg">Van Helsing</Button>
                </div>
                {this.addFavouriteFilm()}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ilgladiatore: () => dispatch(counterVote(IL_GLADIATORE)),
        unasettimanadadio: () => dispatch(counterVote(UNA_SETTIMANA_DA_DIO)),
        vanhelsing: () => dispatch(counterVote(VAN_HELSING))
    }
}

export default connect(null, mapDispatchToProps)(VoteFilm)