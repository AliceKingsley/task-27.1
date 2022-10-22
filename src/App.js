import './App.css';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <div className="grid">
        <Card id={1} name="Безлимитный 300" price={300} speed={10} text="Объем включенного трафика не ограничен" />
        <Card id={2} name="Безлимитный 450" price={450} speed={50} text="Объем включенного трафика не ограничен" />
        <Card id={3} name="Безлимитный 550" price={550} speed={100} text="Объем включенного трафика не ограничен" />
        <Card id={4} name="Безлимитный 1000" price={1000} speed={200} text="Объем включенного трафика не ограничен" />
      </div>
    </div>
  );
}

export default App;