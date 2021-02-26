import './TrackList.css';
import React from 'react';
import Track from '../Track/Track'

const  TrackList = () => {
    return(
        <div className="TrackList">
            <Track />
            <Track />
            <Track />
        </div>
    );
}

export default TrackList;