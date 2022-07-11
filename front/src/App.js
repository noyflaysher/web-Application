import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./Component/body/Body";
import Footer from "./Component/Footer/Footer";
import NavBar from "./Component/NavBar/NavBar";
import { Session } from "./Context/Session";

function App() {
  return (
    <Session>
      <Router>
        <div>
          <div className="body-container">
            <NavBar />
            <Body />
            <Footer />
          </div>
        </div>
      </Router>
    </Session>
  );
}

export default App;
