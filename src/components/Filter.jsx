import React from 'react';

const Filter = ({ filter, setFilter }) => (
  <input
    type="text"
    placeholder="Caută contacte"
    value={filter}
    onChange={e => setFilter(e.target.value)}
  />
);

export default Filter;
