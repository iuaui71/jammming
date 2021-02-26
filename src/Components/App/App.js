//import logo from './logo.svg';
import './App.css';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResult/SearchResult';
import PlayList from '../PlayList/PlayList';

const App = () => {

  
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResult />
            <PlayList />
          </div>
        </div>
      </div>
    );
}

export default App;
