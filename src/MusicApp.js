import React, { Component } from 'react';
import './MusicApp.css';
import Music from './Music';


class MusicApp extends Component {
  render() {
    return (
      <div className="App">
        <Music 
          artista = 'Shakira'
          canciones = {['ojos Asi','Inevitable','tu']}
          img = 'shakira.jpg'
          bio = 'Shakira Isabel Mebarak Ripoll​​ es una cantautora, productora discográfica, bailarina, modelo, empresaria, actriz, embajadora de buena voluntad de la UNICEF y filántropa colombiana'
          />
          <Music
         artista = 'Thalia'
         canciones = {['Equivocada','Desde esa noche','A quien le importa']}
         img = 'thalia.jpg'
         /> 
      </div>
    );
  }
}

  
   
  


export default MusicApp;
