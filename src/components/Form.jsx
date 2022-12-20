import React from 'react';

const Form = ({ setSearchValue }) => {
  return (
    <form>
      <label htmlFor="search-field">Search</label>
      <input type="text" onChange={(e) => setSearchValue(e.target.value)} />
    </form>
  );
};

export default Form;
