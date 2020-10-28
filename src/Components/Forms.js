<div className='search-bar'>
    <input
        type='search'
        value={query}
        placeholder='City...'
        onChange={ e => setQuery(e.target.value)}
    />
    <input
        type='submit'
        value='Search'
        onClick={handleSearch}
    />
</div>
      