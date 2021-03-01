import './TrackList.css';
import React from 'react';
import Track from '../Track/Track'

const  TrackList = (props) => {
    console.log("IN tracklist");
    console.log(props.tracks);
    return(
        <div className="TrackList">
            {props.tracks.map(result => 
                <Track key={result.id === null ? new Date() : result.id} name={result.name} artist={result.artist} album={result.album} id={result.id}
                                                isRemoval={props.isRemoval} onAdd={props.onAdd}  onRemove={props.onRemove}/>
            )
            }
        </div>
    );
}

export default TrackList;