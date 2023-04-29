import logo from './logo.svg';
import './App.css';

function App() {

  let post = '깅 올때까지 숨참음';
  return (
    // JSX 언어
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'red', fontSize : '16px'}}>블로그임</h4>
      </div>
      <h3>{post}</h3>
    </div>
  );
}

export default App;
