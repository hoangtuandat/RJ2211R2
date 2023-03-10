import "./App.css";
import Header from "./component/Header.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "./component/Container";
import Hook from "./hook/Hook";
import BasicForm from "./Formik/BasicForm";
import SignupForm from "./Formik/SignupForm";
import "bootstrap/dist/css/bootstrap.min.css";
import AxiosClient from "./commons/AxiosClient";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Topic from "./component/topic"

function App() {
  return (
    <div className="App">
      <>
      <BrowserRouter>
      <Header />
      <Container />
        <Routes>
          <Route path='/product' element={Container}></Route>
          <Route path='/home' element={Home}></Route>
          <Route path='/topic' element={Topic}></Route>
        </Routes>
      </BrowserRouter>
        {/* <AxiosClient />
        {/* <SignupForm /> */}
        {/* <BasicForm /> */}
        {/* <Hook /> */}
        {/* <Header /> */}
        {/* <Container />  */}
      </>
    </div>
  );
}

export default App;
