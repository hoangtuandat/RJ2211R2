import "./App.css";
import Header from "./component/Header.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "./component/Container";
import Hook from "./hook/Hook";
import BasicForm from "./Formik/BasicForm";
import SignupForm from "./Formik/SignupForm";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <>
      <SignupForm />
      {/* <BasicForm /> */}
          {/* <Hook /> */}
          {/* <Header /> */}
          {/* <Container /> */}
      </>
    </div>
  );
}

export default App;
