import React, { Component } from 'react'
import { Button } from 'reactstrap'
import {connect} from 'react-redux'
import {IL_GLADIATORE,UNA_SETTIMANA_DA_DIO,VAN_HELSING} from '../../costants'
import {counterVote} from '../../action'
import './voteFilm.scss'



class VoteFilm extends Component {

    render() {
        const {ilgladiatore,unasettimanadadio,vanhelsing}=this.props
        return (
            <div className="button-wrapper">
                <h3>Seleziona il tuo film preferito</h3>
                <div className="button-film">                
                    <Button className="m-2" color="warning"  onClick={ilgladiatore} size="lg">Il Gladiatore</Button>  
                    <Button className="m-2" color="warning"  onClick={unasettimanadadio} size="lg">Una settimana da Dio</Button>
                    <Button className="m-2" color="warning"  onClick={vanhelsing} size="lg">Van Helsing</Button>                  
                </div>
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

export default connect(null,mapDispatchToProps)(VoteFilm)