import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from "axios";

import './AlbumItem.scss';
    
const AlbumItem = ({ album, author }) => {
    const [favorite, setFavorite] = useState(album.favorite);
    const date = new Date(album.releaseDate);
    const markFavoriteText = favorite ? "Remove favorite" : "Mark as favorite"
    const activeClass = favorite ? "active" : "";
    const onClickHandler = () => {
        axios.patch(`http://localhost:3004/albums/${album.id}`, {favorite: !favorite})
        setFavorite(!favorite);
    }

    return (
        <article>
            <div className="album-wrapper">
                <img src={album.imageUrl} alt="tmp" />
                <div className="name-wrapper">
                    <h2><cite>{album.title}</cite></h2>
                    <address  className="gray-text" rel="author">
                        <Link to={"/artist/" + author.id}>
                            {author.title}
                        </Link>
                    </address>
                </div>
            </div>
            <div><span className="gray-text">Released: </span>{date.getFullYear()}</div>
            <div>{album.price}</div>
            <div className={`mark-as-favorit ${activeClass}`} onClick={() => {onClickHandler()}}>{markFavoriteText}</div>
        </article>
    );
};

AlbumItem.propTypes = {
    album: PropTypes.object,
    author: PropTypes.object
}

export default AlbumItem;
