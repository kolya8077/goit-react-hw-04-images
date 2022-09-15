import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import {
  Searchbar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from 'components/Searchbar/searchbar.style.jsx';

function Searchbars({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    if (e.currentTarget.value === query) return
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      toast.warn('Please specify your query!');
      return;
    }
    onSubmit(query);
  };

  return (
    <Searchbar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <MdSearch size={30} />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          name="query"
          autocomplete="off"
          autoFocus={true}
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </SearchForm>
    </Searchbar>
  );
}

Searchbars.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbars;
