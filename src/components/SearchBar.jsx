import PropTypes from "prop-types";
// import React from 'react';

const SearchBar = ({ setSearchVideo, submitQuery, searchVideo }) => {
  const handleSearch = () => {
    submitQuery();
  };

  return (
    <div className="search-wrapper">
      <input
        className="search-bar"
        placeholder="Search..."
        onChange={(e) => setSearchVideo(e.target.value)}
        value={searchVideo}
        onKeyUp={(e) => e.key === "Enter" && handleSearch()}
      />
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  setSearchVideo: PropTypes.func,
  submitQuery: PropTypes.func,
  searchVideo: PropTypes.string
};
