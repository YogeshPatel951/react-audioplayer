import React, { Component } from 'react';

import Player from './Components/Player';
import PodcastDetail from './Components/PodcastDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <PodcastDetail/>
        <Player />
        
        
      </div>
    );
  }
}

export default App;
