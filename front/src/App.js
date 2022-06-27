import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./Component/body/Body";
import Footer from "./Component/Footer/Footer";
import LogInForm from "./Component/Form/LogIn";
import NavBar from "./Component/NavBar/NavBar";
import SignUp from "./Component/Form/SignUp";
import RecipeForm from "./Component/Form/RecipeForm";
import { Session } from "./Context/Session";

function App() {
  const [showRecipeForm, setShowRecipeForm] = React.useState(false);
  const [showLoginForm, setShowLoginForm] = React.useState(false);
  const [showSignupForm, setShowSignupForm] = React.useState(false);

  const toggleRecipe = (state) => setShowRecipeForm(state);
  const toggleLogin = (state) => setShowLoginForm(state);
  const toggleSignup = (state) => setShowSignupForm(state);

  return (
    <Session>
      <Router>
        <div>
          <div className="body-container">
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
          </div>
        </div>
      </Router>
    </Session>
  );
}

export default App;
