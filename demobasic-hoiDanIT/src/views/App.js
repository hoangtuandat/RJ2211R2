import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent.js';
import ListTodo from './example/todos/ListTodo';
import Addtodo from './example/todos/Addtodo';


// 2 components: class/ function (arrow, function)
// JSX : code HTML trong JS, cho phép trả về một cụm HTML thay vì một giá trị

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Simple todo app with React.js
        </p>
        {/* <MyComponent /> */}
        <ListTodo />
      </header>
    </div>
  );
}

export default App;
