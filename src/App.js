import React from "react";
import VoteFilm from './components/voteFilm'
import {Provider} from 'react-redux'
import {store} from './store'
import Routes from './routes/index'
import WinnerFilm from './components/winnerFilm'

function App() {
  return (
    <Provider store={store}>
      <Routes />             
    </Provider>
  );
}

export default App;