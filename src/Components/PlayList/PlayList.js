import './PlayList.css';
import React, {useState} from 'react';
import TrackList from '../TrackList/TrackList';

const PlayList = (props) => {
    
    const [playListName, setPlaylistName] =useState('New Playlist');

    const handleChange = e => {
        e.preventDefault();
        setPlaylistName(e.target.value);
    }
    return(
        <div className="Playlist">
            <input placeholder={playListName} onChange={handleChange}/>
            <TrackList tracks={props.tracks} isRemoval="true"/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
}

export default PlayList;