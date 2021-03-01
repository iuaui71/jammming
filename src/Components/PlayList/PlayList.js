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
            <input defaultValue={playListName} onChange={handleChange}/>
            <TrackList tracks={props.tracks} isRemoval="true" onRemove={props.onRemove}/>
            <button className="Playlist-save" onClick={props.onSave}> SAVE TO SPOTIFY</button>
        </div>
    );
}

export default PlayList;