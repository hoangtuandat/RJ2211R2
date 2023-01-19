import "./App.css";
import Header from "./component/Header.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "./component/Container";
import Hook from "./hook/Hook";

function App() {
  return (
    <div className="App">
      <>
          <Hook />
          {/* <Header /> */}
          {/* <Container /> */}
      </>
    </div>
  );
}

export default App;
