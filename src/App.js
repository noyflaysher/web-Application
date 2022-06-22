import React from "react";
import Body from "./Component/body/Body";
import Footer from "./Component/Footer/Footer";
import Card from "./Component/UI/Card";
import LogInForm from "./Component/Form/LogIn";
import NavBar from "./Component/NavBar/NavBar";
import SignUp from "./Component/Form/SignUp";
import LogIn from "./Component/Form/LogIn";
import RecipeForm from "./Component/Form/RecipeForm";

function App() {
  const [showRecipeForm, setShowRecipeForm] = React.useState(false);
  const [showLoginForm, setShowLoginForm] = React.useState(false);
  const [showSignupForm, setShowSignupForm] = React.useState(false);

  const toggleRecipe = (state) => setShowRecipeForm(state);
  const toggleLogin = (state) => setShowLoginForm(state);
  const toggleSignup = (state) => setShowSignupForm(state);

  return (
    <div>
      <Card>
        <NavBar
          newRecipe={toggleRecipe}
          login={toggleLogin}
          signup={toggleSignup}
        />
        <Body />
        <Footer />
        {showRecipeForm && <RecipeForm closeForm={toggleRecipe} />}
        {showLoginForm && <LogInForm closeForm={toggleLogin} />}
        {showSignupForm && <SignUp closeForm={toggleSignup} />}
      </Card>
    </div>
  );
}

export default App;
