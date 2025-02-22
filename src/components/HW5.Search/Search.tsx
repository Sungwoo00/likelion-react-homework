import { useState, useEffect } from 'react'
import debounce from 'lodash/debounce'
import SearchForm from './Components/SearchForm'
import CardList from './Components/CardList'
import { BnWDatas } from '../HW5.Search/data/BnWData'
import './style/Search.css'

function Search() {
  const [searchQuery, setSearchQuery] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('q') || '';
  });
  const [filteredData, setFilteredData] = useState(BnWDatas);

  const updateURL = debounce((value: string) => {
    const newUrl = new URL(window.location.href);
    if (value) {
      newUrl.searchParams.set('q', value);
    } else {
      newUrl.searchParams.delete('q');
    }
    window.history.pushState({}, '', newUrl.toString());
  }, 300);

  const handleSubmit = (value: string) => {
    setSearchQuery(value);
    updateURL(value);
    
    const newFilteredData = BnWDatas.filter(item => 
      item.name.toLowerCase().includes(value.toLowerCase()) 
    );
    setFilteredData(newFilteredData);
  };

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setSearchQuery(params.get('q') || '');
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      updateURL.cancel();
    };
  }, []);

  return (
    <section className="search-container">
      <div className='search-header'>
        <h2 className='search-title'>흑 / 백 과사전</h2>
        <img className='search-title__img' src="/SearchImg/book.png" alt="흑,백과사전"/>
      </div>
      <SearchForm 
        value={searchQuery} 
        onSubmit={handleSubmit}
        onChange={setSearchQuery}
      />
      <CardList data={filteredData} />
    </section>
  )
}

export default Search