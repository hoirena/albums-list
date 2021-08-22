import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "../axios";

import config from '../config';

import Header from '../components/Header';
import AlbumItem from '../components/AlbumItem';

function Home() {
    const [albums, setAlbums] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [search, setSearch] = useState('');
    const env = config[process.env.NODE_ENV];

    let reducedAlbums = [];
    let location = useLocation();

    function fetchData () {
        axios.get(`${env.baseURL}/artists/`).then(response => setAuthors(response.data));
        axios.get(`${env.baseURL}/albums/`).then(response => setAlbums(response.data));
    }

    useEffect(fetchData, [search, env]);

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
        const author = authors?.find(author => author.id === album.artistId);
        return <AlbumItem album={album} author={author} key={index} env={env} />;
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
