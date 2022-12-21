import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/MyComponent.js';


// 2 components: class/ function (arrow, function)
// JSX : code HTML trong JS, là một hàm của JS, trả về một cụm HTML thay vì một giá trị

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World with React.js
        </p>
        
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
