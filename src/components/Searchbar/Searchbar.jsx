import React, { Component } from 'react';
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

class Searchbars extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleChange = e => {
    this.setState({ query: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      toast.warn('Please specify your query!');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.reset();
  };

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handleSubmit}>
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
            onChange={this.handleChange}
          />
        </SearchForm>
      </Searchbar>
    );
  }
}

export default Searchbars;
