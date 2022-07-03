import React from "react";
import { Route, Switch } from "react-router-dom";
import Result from "../Result/Result";
import ChosenRecipe from "../ChosenRecipe/ChosenRecipe";
import FavoriteRecipe from "../FavoriteRecipe/FavoriteRecipe";
import { UseSearch } from "../../Context/Session.jsx";
import Profile from "../UserProfile/Profile";
import "./Body.css";

function Body() {
  const items = UseSearch().result;
  return (
    <div className="body__continer">
      <aside className="body__result-continer">
        <Result items={items} />
      </aside>
      <div className="body__recipe-continer">
        <Switch>
          <Route path="/" exact>
            <FavoriteRecipe />
          </Route>
          <Route path="/recipe/:id" exact>
            <ChosenRecipe items={items} />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Body;
