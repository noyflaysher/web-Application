import React from 'react'

function Recipe() {
  return (
    <>
    <figure>
        <img />
        <h1 >
        <span>recipe title</span>
        </h1>
    </figure>

    <div class="recipe__details">
        <div class="recipe__info">
        <svg class="recipe__info-icon">
            <use></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes"></span>
        <span class="recipe__info-text">minutes</span>
        </div> 
        <div class="recipe__info">
        <svg class="recipe__info-icon">
            <use href></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people"></span>
        <span class="recipe__info-text">servings</span>
        <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings">
            <svg>
                <use></use>
            </svg>
            </button>
            <button class="btn--tiny btn--update-servings">
            <svg>
                <use></use>
            </svg>
            </button>
        </div>
        </div>
        <div class="recipe__user-generated">
        <svg>
          <use ></use>
        </svg>
      </div>
        <button class="btn--round btn--bookmark ">
        <svg class="">
            <use ></use>
        </svg>
        </button>
    </div>
    <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
        </ul>
    </div>

    <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher"></span>. Please check out
        directions at their website.
        </p>
        <a
        class="btn--small recipe__btn"
        >
        <span>Directions</span>
        <svg class="search__icon">
            <use>
            </use>
        </svg>
        </a>
    </div>
    </>
    )
}

export default Recipe