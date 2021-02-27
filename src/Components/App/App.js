import './App.css';
import React, {useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import PlayList from '../PlayList/PlayList';

const App = (props) => {

  const [searchResults, setSearchResults] = useState([{name: 'over the hills', artist: 'Gary Moore', album: 'wild frontier', id: 12},
                                                      {name: 'over the rainbow', artist: 'Rainbow', album: 'Live Between the eyes', id:13}]);
  
  const [playlistTracks, setPlaylistTracks] = useState([{name:'Yksinkertaista', artist:'Johanna Kurkela', album:'Dolores Hayes', id: Date.now()}]);
  
  const addTrack = (track) =>{
    console.log('addTrack entry: ')
    console.log(track);
    console.log('addTrack track id :' + track.id);
    if(!playlistTracks.find(element => element.id === track.id)){
      setPlaylistTracks([...playlistTracks, track]);
    }
    console.log('After addition');
    console.log(playlistTracks)
  }
  
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
          <SearchResult tracks={searchResults} onAdd={addTrack}/>
          <PlayList tracks={playlistTracks} />
          </div>
        </div>
      </div>
    );
}
//
export default App;
