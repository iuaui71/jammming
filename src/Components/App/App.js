import './App.css';
import React, {useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import PlayList from '../PlayList/PlayList';
import Spotify from '../../util/Spotify';

const App = (props) => {

  const [searchResults, setSearchResults] = useState([]);
  
  const [playlistTracks, setPlaylistTracks] = useState([]);
  
  const addTrack = (track) =>{
    if(!playlistTracks.find(element => element.id === track.id)){
      setPlaylistTracks([...playlistTracks, track]);
    }
  }

  const removeTrack = (track) => { 
    setPlaylistTracks(playlistTracks.filter(item => track.id !== item.id));
  }

  const savePlaylist = () => {
   // const trackURIs = [];
  }

  const search = (term) => {
    const spot = new Spotify();
    const tracks = spot.search(term);
    // luultavasti pitää tässä kohtaa laittaa foreach pyörimään niin saa hieman siistimmän taulukon
    console.log("After search...")
    console.log(tracks);
    setSearchResults([...searchResults, tracks]);
  }
  
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={search} />
          <div className="App-playlist">
          <SearchResult tracks={searchResults} onAdd={addTrack}/>
          <PlayList tracks={playlistTracks} onRemove={removeTrack} onSave={savePlaylist} />          
          </div>
        </div>
      </div>
    );
}
//
export default App;
