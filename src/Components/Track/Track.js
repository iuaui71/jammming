import './Track.css';
import React from 'react';

const Track = () => {

    renderAction = () => {
        return (
            <button className="Track-action">{isRemoval === true ? '-' : '+'}</button>
        );
    }

    return(
        <div className="Track">
            <div className="Track-information">
                <h3>--track name will go here --</h3>
                <p>-- track artist will go here-- | -- track album will go here --</p>
             </div>
            <button className="Track-action">-- + or - will go here --</button>
        </div>
    );
}

export default Track;