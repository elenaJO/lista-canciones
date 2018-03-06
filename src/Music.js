import React, {Component} from 'react';
import './Music.css';
import PropTypes from 'prop-types'

class Music extends Component {
 render(){
   const {artista, img, bio} = this.props
   const musicArtis = this.props.canciones.map((cancion,index)=>{
       return <li key={index}>{cancion}</li>
   })
     
     return (
         <div className="music-card"> 
            <div className="music-card-image">
                <img src={img} alt={artista} />
            </div>
            <div className="music-card-content">   
                <h3 className = "music-title-artist">{artista}</h3> 
                <ul>{musicArtis}</ul>
                <p>{bio}</p>
            </div>
        </div>
     )
 }
}

Music.propTypes = {
    artista: PropTypes.string.isRequired,
  };
  
 Music.defaultProps = {
    bio: 'default no tiene biografia',
  };

export default Music;