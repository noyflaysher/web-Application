<<<<<<< HEAD
import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
=======
import React from "react";
>>>>>>> body

function NavBar() {
  return (
    <>
<<<<<<< HEAD
    <header class="header">
        <img alt="Logo" class="header__logo" />

    <SearchBar></SearchBar>
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item">
              <button class="nav__btn nav__btn--add-recipe">
                <svg class="nav__icon">
=======
      <header className="header">
        <img alt="Logo" className="header__logo" />
        <form className="search">
          <input
            type="text"
            className="search__field"
            placeholder="Search over 1,000,000 recipes..."
          />
          <button className="btn search__btn">
            <svg className="search__icon">
              <use></use>
            </svg>
            <span>Search</span>
          </button>
        </form>

        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <button className="nav__btn nav__btn--add-recipe">
                <svg className="nav__icon">
>>>>>>> body
                  <use></use>
                </svg>
                <span>Add recipe</span>
              </button>
            </li>
            <li className="nav__item">
              <button className="nav__btn nav__btn--bookmarks">
                <svg className="nav__icon">
                  <use></use>
                </svg>
                <span>Bookmarks</span>
              </button>
              <div className="bookmarks">
                <ul className="bookmarks__list">
                  <div className="message">
                    <div>
                      <svg>
                        <use></use>
                      </svg>
                    </div>
                    <p>
                      No bookmarks yet. Find a nice recipe and bookmark it :)
                    </p>
                  </div>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
