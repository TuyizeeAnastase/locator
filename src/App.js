import './App.css';
import Navigation from './components/navigation';
import Search  from './components/search';

function App() {
  return (
    <div className='content p-4' id='content'>
      <Navigation/>
      <Search/>
    </div>
  );
}

export default App;
