import s from './Searchbar.module.css'
import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    name:""
  };

 

  onChangeInput = (e) => {
    this.state.name = e.currentTarget.value;
  };

  reset = () => {
    this.setState({ name:""});
    
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.name);
    this.reset();
  };

  render() {
    return (
      <>
        <header className={s.searchbar}>
          <form className={s.form} onSubmit={this.onSubmit}>
            <button type="submit" className={s.button}>
              <span className={s.buttonLabel}>Search</span>
            </button>

            <input
              className={s.input}
            //   value={this.state.value}
              type="text"
            //   autocomplete="off"
            //   autofocus
              placeholder="Search images and photos"
              onChange={this.onChangeInput}
            />
          </form>
        </header>
      </>
    );
  }
}

export default SearchBar;
