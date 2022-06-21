import Body from "./Component/body/Body";
import Footer from "./Component/footer/Footer";
import Card from "./Component/UI/Card";
import LogInForm from "./Component/Form/LogInForm";
import NavBar from "./Component/NavBar/NavBar";
import SignUp from "./Component/Form/SignUp";

function App() {
  return (
    <div>
      <Card>
        <NavBar />
        <Body />
        <Footer />
        <SignUp />
      </Card>
    </div>
  );
}

export default App;
