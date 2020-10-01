import React from 'react';
import PropTypes from 'prop-types';

const AlbumItem = ({album})=>{
    return (
        <>
            <div className='card col-lg-3 col-md-4 col-sm-6 mx-1 d-flex shadow card-img-top m-2'>
                <div className="card-body text-center">
                    <a href="#btn" className="returnValue">
                        <h5 className="card-title title text-muted" >{album.id}</h5>
                    </a>
                    <p className="card-text subtext">{album.title}</p>
                </div>
            </div>
        </>
    )
}

//PropTypes
AlbumItem.propTypes={
    album:PropTypes.object.isRequired
}

export default AlbumItem;
