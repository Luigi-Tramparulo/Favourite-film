import {IL_GLADIATORE,UNA_SETTIMANA_DA_DIO,VAN_HELSING} from '../costants'

const initialState = {
  total:0,
  ilgladiatore:0,
  unasettimanadadio:0,
  vanhelsing:0,
}

export const reducer = (state=initialState, action) => {
  switch(action.type){
    case IL_GLADIATORE :
      return {...state,ilgladiatore:state.ilgladiatore+1};
    case UNA_SETTIMANA_DA_DIO :
      return {...state,unasettimanadadio:state.unasettimanadadio+1};
    case VAN_HELSING :
      return {...state,vanhelsing:state.vanhelsing+1};
      default:
        return state;
  }    
}
