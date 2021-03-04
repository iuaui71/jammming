import './TrackList.css';
import React from 'react';
import Track from '../Track/Track'

const  TrackList = ({tracks, isRemoval, onAdd, onRemove}) => {
    console.log("IN tracklist");
    console.log(tracks);
    if(tracks){
        return(
            <div className="TrackList">
                {
                    tracks.map(result => 
                        <Track key={result.id === null ? new Date() : result.id} 
                                    name={result.name} 
                                    artist={result.artist} 
                                    album={result.album} 
                                    id={result.id}
                                    isRemoval={isRemoval} 
                                    onAdd={onAdd} 
                                    onRemove={onRemove}/>
                        )
                }           
            </div>
        );
    }
    else {
        return (
            <div className="TrackList">
                <Track></Track>
            </div>
        );
    }   
}

export default TrackList;