import React, { Component } from 'react';
import Artwork from './artwork';

class Artworks extends Component {
  
  render() {
    const { store } = this.props;
    const artworks = store.getState().artworks.map((artwork, index) => {
      return <Artwork key={index} artwork={artwork} store={store} />
    });
    
    return(
      <ul>
        {artworks}
      </ul>
    );
  }
};

export default Artworks;