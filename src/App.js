import './App.css';
import Navigation from './components/navigation/Navigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Shixun Li</h1>
      </header>
      <div className='App-content'>
        <Navigation></Navigation>
        <div class="scrollable-area">
          
        </div>
      </div>
    </div>
  );
}

export default App;
