import './Track.css';
import React from 'react';

const Track = (props) => {
    console.log(props)
    const {isRemoval, onAdd, onRemove} = props;
    const addTrack = (props) => {
        const track = {name : props.name, artist: props.artist, album: props.album, id: props.id};
        onAdd(track);
    }
    const removeTrack = (props) => {
        const track = {name : props.name, artist: props.artist, album: props.album, id: props.id};
        onRemove(track);
    }
    const handleClick = e => {
        e.preventDefault();
        if(isRemoval === "false"){
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
            {<button className="Track-action" onClick={handleClick}>{isRemoval === "true" ? '-' : '+'}</button>}
        </div>
    );
}

export default Track;