import React from 'react';
import AlbumItem from './AlbumItem';
import Loader from './Loader';

import PropTypes from 'prop-types';


const Albums = ({albums,isLoading}) => {

    return isLoading ? <Loader/> : (
        <div className="row justify-content-center" id="cardDiv">
            { albums.map(album=>(
                        <AlbumItem key={album.id} album={album} />
                ))}
        </div>
    ) 
}

//PropTypes
Albums.propTypes={
    albums:PropTypes.array.isRequired
}

export default Albums;
