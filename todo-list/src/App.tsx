
import './App.css';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Item todo={'Take out the trash'} dueDate={new Date(2023, 8, 21, 15, 30, 0, 0)}></Item>
      </header>
    </div>
  );
}

export default App;
