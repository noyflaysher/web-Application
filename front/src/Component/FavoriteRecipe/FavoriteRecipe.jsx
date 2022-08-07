import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./FavoriteRecipe.css";
import FavoriteRecipeItem from "./FavoriteRecipeItem";
import SocialSharing from "../Social/SocialSharing";
import { UseSession } from "../../Context/Session.jsx";

const FavoriteRecipe = () => {
  const session = UseSession();
  React.useEffect(() => {
    fetch("http://localhost:3000/recipe/fav")
      .then((res) => res.json())
      .then((data) => session.setFavoriteRecipe(data.DefaultFavoriteRecipes));
  }, []);
  const favRecipesArr = session.favoriteRecipe;
  return (
    <div className="fav-recipes__container">
      <header className="fav-recipes__header">
        {session.session.userId === null ? (
          <h2>The Favorite Recipes Of The Week</h2>
        ) : (
          <h2>Recommended Recipes</h2>
        )}
      </header>
      <Carousel infiniteLoop className="carousel-root" showThumbs={false}>
        {favRecipesArr.map((recp, index) => {
          return (
            <div key={index} className="fav-recipes__recipe">
              <FavoriteRecipeItem
                key={index}
                index={index}
                id={recp.id}
                image={recp.imageSrc}
                title={recp.title}
                time={recp.time}
                servings={recp.servings}
                publisher={recp.publisher}
              />
            </div>
          );
        })}
      </Carousel>
      <video
        src="https://ak.picdn.net/shutterstock/videos/32420266/preview/stock-footage-eating-and-leisure-concept-group-of-people-having-dinner-at-table-with-food.webm"
        className="video"
        autoPlay
        loop
        controls
      ></video>
      <SocialSharing />
    </div>
  );
};
export default FavoriteRecipe;
