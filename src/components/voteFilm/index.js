import React, {useState} from 'react'
import {Button} from 'reactstrap'
import { connect } from 'react-redux'
import { IL_GLADIATORE, UNA_SETTIMANA_DA_DIO, VAN_HELSING } from '../../costants'
import { counterVote } from '../../action/index'
import './voteFilm.scss'
import FavouriteFilm from '../favouriteFilm'

const VoteFilm = (props) => {
    const { ilgladiatore, unasettimanadadio, vanhelsing } = props
    const [clicked, updateClick] = useState(false);

    const handleClick = (action) => {
        action();
        updateClick(clicked => clicked = true)
    }

    const addFavouriteFilm = () => {
        if (clicked) {
            return <FavouriteFilm />
        } else {
            return null
        }
    }

    return (
        <div className="button-wrapper">
            <h3>Seleziona il tuo film preferito</h3>
            <div className="button-film">
                <Button className="m-2" color="warning" onClick={() => { handleClick(ilgladiatore) }} size="lg">Il Gladiatore</Button>
                <Button className="m-2" color="warning" onClick={() => { handleClick(unasettimanadadio) }} size="lg">Una settimana da Dio</Button>
                <Button className="m-2" color="warning" onClick={() => { handleClick(vanhelsing) }} size="lg">Van Helsing</Button>
            </div>
            {addFavouriteFilm()}
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        ilgladiatore: () => dispatch(counterVote(IL_GLADIATORE)),
        unasettimanadadio: () => dispatch(counterVote(UNA_SETTIMANA_DA_DIO)),
        vanhelsing: () => dispatch(counterVote(VAN_HELSING))
    }
}

export default connect(null, mapDispatchToProps)(VoteFilm)