import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../components/Header';
import AlbumItem from '../components/AlbumItem';

function Home() {
    const [albums, setAlbums] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [search, setSearch] = useState('');

    let reducedAlbums = [];
    let location = useLocation();

    async function fetchData () {
        const authors = await fetch("http://localhost:3004/artists/").then(res => res.json());
        const albums = await fetch("http://localhost:3004/albums/").then(response => response.json());

        setAlbums(albums);
        setAuthors(authors);
    }

    useEffect(() => {
        fetchData();
    }, [search]);

    if (location.search.substr(0, 7) === "?limit=") {
        const limitRegEx = location.search.match(/=([0-9]+)$/);
        reducedAlbums = limitRegEx ? albums.slice(0, limitRegEx[1]) : albums.slice(0, 10);
    } else {
        reducedAlbums = albums.slice(0, 10);
    }

    if (search) {
        let searchedAlbums = [];
        for (let i = 0; i<reducedAlbums.length; i++) {
            if (reducedAlbums[i].title.toLowerCase().includes(search)) {
                searchedAlbums.push(reducedAlbums[i]);
            }
        }
        reducedAlbums = searchedAlbums;
    }

    const renderAlbums = reducedAlbums.map((album, index) => {
        const author = authors.find(author => author.id === album.artistId);
        return <AlbumItem album={album} author={author} key={index} />;
    });

    return (
        <>
            <Header title="Albums list" setSearch={setSearch} />
            {!albums.length ? <p>Loading albums...</p> : null}
            {authors.length ? renderAlbums : null}
        </>
    );
}

export default Home;
