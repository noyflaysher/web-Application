import React from "react";
import Body from "./Component/body/Body";
import Footer from "./Component/footer/Footer";
import Card from "./Component/UI/Card";
import LogInForm from "./Component/Form/LogInForm";
import NavBar from "./Component/NavBar/NavBar";
import SignUp from "./Component/Form/SignUp";
import RecipeForm from "./Component/Form/RecipeForm";

function App() {
  const [showRecipeForm, setShowRecipeForm] = React.useState(false);

  const toggleRecipe = (state) => setShowRecipeForm(state);
  return (
    <div>
      <Card>
        <NavBar newRecipe={toggleRecipe} />
        <Body />
        <Footer />
        {showRecipeForm && <RecipeForm closeForm={toggleRecipe} />}
      </Card>
    </div>
  );
}

export default App;
