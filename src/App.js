import React from "react";
import Body from "./Component/body/Body";
import Footer from "./Component/Footer/Footer";
import LogInForm from "./Component/Form/LogIn";
import NavBar from "./Component/NavBar/NavBar";
import SignUp from "./Component/Form/SignUp";
import RecipeForm from "./Component/Form/RecipeForm";

const item = {
  imageSrc:
    "https://do94x2ubilg42sdsl48mfdqk-wpengine.netdna-ssl.com/wp-content/uploads/44890096345_3612433c15_b.jpg",
  id: "Vegetarian_sushi",
  title: "Vegetarian sushi",
  time: 3,
  servings: 3,
  description: "Vegetarian sushi",
  publisher: "Oz",
  link: "#",
  address: "20 W 34th St, New York, NY 10001",
  location: {
    lat: 40.7484405,
    lng: -73.9878584,
  },
};
function App() {
  const [showRecipeForm, setShowRecipeForm] = React.useState(false);
  const [showLoginForm, setShowLoginForm] = React.useState(false);
  const [showSignupForm, setShowSignupForm] = React.useState(false);

  const toggleRecipe = (state) => setShowRecipeForm(state);
  const toggleLogin = (state) => setShowLoginForm(state);
  const toggleSignup = (state) => setShowSignupForm(state);

  return (
    <div>
      <div className="body-container">
        <NavBar
          newRecipe={toggleRecipe}
          login={toggleLogin}
          signup={toggleSignup}
        />

        {/* <video width="750" height="500" controls>
          <source src="https://www.youtube.com/watch?v=V2LttnPZW64" />
        </video>

        <video
          className="video"
          src="https:\/\/www.youtube.com\/watch?v=IEDEtZ4UVtI"
        ></video> */}

        <Body />

        <Footer />
        {showRecipeForm && <RecipeForm closeForm={toggleRecipe} />}
        {showLoginForm && <LogInForm closeForm={toggleLogin} />}
        {showSignupForm && <SignUp closeForm={toggleSignup} />}
      </div>
    </div>
  );
}

export default App;
