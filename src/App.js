import React from "react";
import VoteFilm from './components/voteFilm'
import {Provider} from 'react-redux'
import {store} from './store'
import WinnerFilm from './components/winnerFilm'

function App() {
  return (
    <Provider store={store}>
      <VoteFilm />  
      <WinnerFilm />          
    </Provider>
  );
}

export default App;