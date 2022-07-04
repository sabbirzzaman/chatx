import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Search = () => {
    return (
        <div className="p-3">
            <div className="input w-full bg-[#1e1d29] flex items-center gap-3">
                <FontAwesomeIcon
                    className="text-xl"
                    icon={faMagnifyingGlass}
                ></FontAwesomeIcon>
                <input
                    type="text"
                    className="w-full h-full bg-[#1e1d29] focus:outline-none"
                    placeholder="Search..."
                />
            </div>
        </div>
    );
};

export default Search;
