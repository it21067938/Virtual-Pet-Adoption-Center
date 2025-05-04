import React from 'react'

function SearchComponent({ search, setSearch }) {

    function searchItem(event) {
        setSearch(event.target.value);
      }
    
      const handleSearchSubmit = (e) => {
        e.preventDefault();
        const petListElement = document.getElementById('pet-list');
        if (petListElement) {
          petListElement.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
      const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          handleSearchSubmit(e); 
        }
      };
    
  return (
    <div className="relative hidden md:block">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none cursor-pointer">
      <a href="#pet-list" onClick={handleSearchSubmit}>
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-500 cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only cursor-pointer">Search icon</span>
      </a>
    </div>
    <input
      type="text"
      id="search-navbar"
      className="block w-full p-2 ps-10 text-sm text-white-900 border border-gray-500 rounded-lg bg-gray-100 focus:ring-purple-500 focus:border-purple-500 white:bg-gray-800 white:border-gray-800 dark:placeholder-gray-500 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search pets by name ..."
      value={search}
      onChange={searchItem}
      onKeyDown={handleKeyDown} 
    />
  </div>
  )
}

export default SearchComponent