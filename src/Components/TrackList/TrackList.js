import './TrackList.css';
import React from 'react';
import Track from '../Track/Track'

const  TrackList = (props) => {
    
    return(
        <div className="TrackList">
            {props.tracks.map(result => 
                <Track key={result.id} name={result.name} artist={result.artist} album={result.album} 
                                                isRemoval={props.isRemoval} onAdd={props.onAdd}  id={result.id}/>
            )
            }
        </div>
    );
}

export default TrackList;