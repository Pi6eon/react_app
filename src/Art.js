import Axios from 'axios';
import React, { useRef, useState } from 'react';

export const Art = () => {
    const [art_data, updateArtData] = useState([]);
    const searchInput = useRef(null); // holds a reference to an element

    const handleSearchArt = (ev) => {
        const title = searchInput.current.value; // similar to title = document.getElementById('search-text-input').value;
        const params = { q: title, limit: 5, fields: 'id,title,image_id,artist_display' }; // sample set of params, limits the number of results to 5, and only returns the id, title, image_id, and artist_display fields    
        Axios.request({
            url: 'https://api.artic.edu/api/v1/artworks/search',
            params
        }).then(res => {
            const { config, data } = res.data;
            const updated_art_data = data.map(artPiece => ({ config, ...artPiece })); // add config to each art piece
            updateArtData(updated_art_data);
        }).catch(err => console.log(err));
    }

    return (<div>
        <input ref={searchInput} id='search-text-input' type='text' />
        <button onClick={handleSearchArt}> search </button>
        {art_data.map(art_piece_data => (<ArtPiece key={art_piece_data.id} {...art_piece_data} />))} 
        {/* Don't be overwhelmed by {...art_piece_data} this is another example of destructuring, each key,value pair is passed down as if it were independent */}
    </div>)
}

// Again we pull out each argument passed by name using destructuring
const ArtPiece = ({ config, title, image_id, id, artist_display }) => {
    return (<div>
        <img src={`${config.iiif_url}/${image_id}/full/843,/0/default.jpg`} />
        <h3>{title}</h3>
        <p>{artist_display}</p>
    </div>)
}