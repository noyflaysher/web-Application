import React from 'react'

function NavBar() {
  return (
    <>
    <header class="header">
        <img alt="Logo" class="header__logo" />
        <form class="search">
          <input
            type="text"
            class="search__field"
            placeholder="Search over 1,000,000 recipes..."
          />
          <button class="btn search__btn">
            <svg class="search__icon">
              <use></use>
            </svg>
            <span>Search</span>
          </button>
        </form>

        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item">
              <button class="nav__btn nav__btn--add-recipe">
                <svg class="nav__icon">
                  <use></use>
                </svg>
                <span>Add recipe</span>
              </button>
            </li>
            <li class="nav__item">
              <button class="nav__btn nav__btn--bookmarks">
                <svg class="nav__icon">
                  <use ></use>
                </svg>
                <span>Bookmarks</span>
              </button>
              <div class="bookmarks">
                <ul class="bookmarks__list">
                  <div class="message">
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
  )
}

export default NavBar