import Body from "./Component/body/Body";
import Footer from "./Component/footer/Footer";
import Card from "./Component/UI/Card";
import LogInForm from "./Component/Form/LogInForm";
import NavBar from "./Component/NavBar/NavBar";
function App() {
  return (
    <div>
      <Card>
        <NavBar />
      </Card>

      <Card>
        <Body />
        <Footer />
        <LogInForm />
      </Card>
    </div>
  );
}

export default App;
