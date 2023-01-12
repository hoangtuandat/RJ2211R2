import "./App.css";
import Header from "./component/Header.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "./component/Container";

function App() {
  return (
    <div className="App">
      <>
          <Header />
          <Container />
      </>
    </div>
  );
}

export default App;
