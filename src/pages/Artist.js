import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import AlbumItem from '../components/AlbumItem';
import Header from '../components/Header';

function Artist() {
    const { id } = useParams();
    const idNum = parseInt(id);
    const [albums, setAlbums] = useState([]); 
    const [author, setAuthor] = useState({});

    async function fetchData () {
        const fetchAuthor = await fetch(`http://localhost:3004/artists/${idNum}`).then(res => res.json());
        const albums = await fetch("http://localhost:3004/albums/").then(response => response.json());

        setAlbums(albums);
        setAuthor(fetchAuthor);
    }

    const renderAuthorsAlbums = albums.map((album, index) => {
        if (album.artistId === idNum) {
            return <AlbumItem album={album} author={author} key={index} />
        } else {
            return null;
        }
    });

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Header title={author.title} />
            {!albums.length ? <p>Loading author's albums...</p> : null}
            {renderAuthorsAlbums}
        </>
    )
}

Artist.propTypes = {
    author: PropTypes.object
}

export default Artist;
