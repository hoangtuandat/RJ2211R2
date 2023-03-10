import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent.js';
import ListTodo from './example/todos/ListTodo';
import Addtodo from './example/todos/Addtodo';
import Nav from './Nav/Nav';
import Home from './example/Home';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';


// 2 components: class/ function (arrow, function)
// JSX : code HTML trong JS, cho phép trả về một cụm HTML thay vì một giá trị

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route path="/" exact>
          <Home />
          </Route>
          <Route path="/todo">
          <ListTodo />
          </Route>
          <Route path="/about">
          <MyComponent />
          </Route>
          <Route path="/user" exact>
          <ListUser />
          </Route>
          <Route path="/user/:id">
          <DetailUser />
          </Route>
        </Switch>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
