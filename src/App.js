import './App.css';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Promising News
        <em><p className="header-desc">Find positive news articles!</p></em>
      </header>
      <main className="App-main">
        <News />
      </main>
    </div>
  );
}

export default App;
