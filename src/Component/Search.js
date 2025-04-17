import React from 'react';

const Search = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Cari deskripsi..."
      onChange={(e) => onSearch(e.target.value)}
      style={{
        marginBottom: '1rem',
        padding: '0.5rem',
        width: '100%',
        border: '1px solid #ccc',
        borderRadius: '4px',
      }}
    />
  );
};

export default Search;
