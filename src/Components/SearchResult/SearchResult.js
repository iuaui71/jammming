import './SearchResult.css';
import TrackList from '../TrackList/TrackList';

const SearchResult = (props) => {
    
    return(
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={props.tracks} isRemoval="false" onAdd={props.onAdd} />
        </div>
    );
}

//
export default SearchResult;