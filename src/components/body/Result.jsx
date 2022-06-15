import React from 'react'

function Result() {
  return (
    <>
    <div class="search-results">
        <ul class="results">
           <a>RECIPE1</a>
          <a>RECIPE2</a>
          <li class="preview">
            <a class="preview__link preview__link--active">
              <figure class="preview__fig">
                <img alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">Pasta with Tomato Cream ...</h4>
                <p class="preview__publisher">The Pioneer Woman</p>
                <div class="preview__user-generated">
                  <svg>
                    <use></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
        </ul>
    </div>
    </>
  )
}

export default Result