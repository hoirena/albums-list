import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import axios from "../axios";

import config from '../config';

import AlbumItem from '../components/AlbumItem';
import Header from '../components/Header';

function Artist() {
    const { id } = useParams();
    const idNum = parseInt(id);
    const [albums, setAlbums] = useState([]); 
    const [author, setAuthor] = useState({});
    const env = config[process.env.NODE_ENV];

    function fetchData () {
        axios.get(`${env.baseURL}/artists/${idNum}`).then(response => setAuthor(response.data));
        axios.get(`${env.baseURL}/albums/`).then(response => setAlbums(response.data));
    }

    const renderAuthorsAlbums = albums.map((album, index) => {
        if (album.artistId === idNum) {
            return <AlbumItem album={album} author={author} key={index} />
        } else {
            return null;
        }
    });

    useEffect(fetchData, [env, idNum]);

    return (
        <>
            <Header title={ author?.title} />
            {!albums.length ? <p>Loading author's albums...</p> : null}
            {renderAuthorsAlbums}
        </>
    )
}

Artist.propTypes = {
    author: PropTypes.object
}

export default Artist;
