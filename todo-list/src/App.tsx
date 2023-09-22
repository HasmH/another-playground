import './App.css';
import Item from './components/Item';
import AddButton from './components/AddButton';
import ItemList from './components/ItemList';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ItemList></ItemList>
      </header>
    </div>
  );
}

export default App;

//TODO: Delete Button 