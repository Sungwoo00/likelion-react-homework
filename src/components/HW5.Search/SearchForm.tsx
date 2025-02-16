import { useState } from 'react'

function SearchForm() {

  const [searchValue, setSearchValue] = useState("검색어를 입력하세요")


  const handleClear = () => {
    setSearchValue('')
  }

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return(
    <form action="">
      <input type='search' value={searchValue} onChange={changeInput}/>
      <button type='button' onClick={handleClear}>
        XXX
        <img></img>
      </button>
      <button type='submit'>검색 버튼</button>
    </form>
  )

}

export default SearchForm

