import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onInpuChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSearchCallback(searchTerm);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={searchTerm} onChange={onInpuChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
