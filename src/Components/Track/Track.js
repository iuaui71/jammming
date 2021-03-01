import './Track.css';
import React from 'react';

const Track = (props) => {

    const addTrack = (props) => {
        const track = {name : props.name, artist: props.artist, album: props.album, id: props.id};
        props.onAdd(track);
    }
    const removeTrack = (props) => {
        const track = {name : props.name, artist: props.artist, album: props.album, id: props.id};
        props.onRemove(track);
    }
    const handleClick = e => {
        e.preventDefault();
        if(props.isRemoval === "false"){
            addTrack(props);
        }
        else{
            removeTrack(props)
        }
    }
 
    return(
        <div className="Track">
            <div className="Track-information">
                <h3>{props.name}</h3>
                <p>{props.artist} | {props.album}</p>
            </div>
            {<button className="Track-action" onClick={handleClick}>{props.isRemoval === "true" ? '-' : '+'}</button>}
        </div>
    );
}

export default Track;