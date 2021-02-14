import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

const Header = ({ title, setSearch }) => {
    const search = () => {
        const onKeyDown = (e) => {
            if (e.key === 'Enter') {
                const searchString = e.target.value.toLowerCase();
                setSearch(searchString);
            }
        };

        return (
            <div className="search-wrapper">
                <input
                    type="text"
                    placeholder="Search"
                    onKeyDown={onKeyDown}
                />
            </div>
        );
    }

    return (
        <header>
            <div>
                <h1>{title}</h1>
                {setSearch ? search() : null}
            </div>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string,
    setSearch: PropTypes.func
}

export default Header;
