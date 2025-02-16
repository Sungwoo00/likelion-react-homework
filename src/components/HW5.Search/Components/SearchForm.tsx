import { useId } from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import '../style/SearchForm.css';

interface SearchFormProps {
  value: string;
  onSubmit: (value: string) => void;
  onChange: (value: string) => void;
}

function SearchForm({ value, onSubmit, onChange }: SearchFormProps) {
  const searchInputId = useId();

  const handleClear = () => {
    onChange('');
  };

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label htmlFor={searchInputId} className="sr-only">
        카드 검색
      </label>
      <div className="search-input-wrapper">
        <div className="search-input-container">
          <input
            type="search"
            placeholder="검색어를 입력하세요"
            id={searchInputId}
            value={value}
            onChange={changeInput}
            className="search-input"
          />
          {value && (
            <button
              type="button"
              onClick={handleClear}
              className="clear-button"
              aria-label="검색어 지우기"
            >
              <IoCloseCircleOutline className="clear-icon" />
            </button>
          )}
        </div>
        <button type="submit" className="search-button">
          검색
        </button>
      </div>
    </form>
  );
}

export default SearchForm;