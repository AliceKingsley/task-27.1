import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import rates from './components/rates';

function App() {

  const [isSelected, setIsSelected] = useState(0);

  return (
    <div className="App">
      <div className="grid">
        {
          rates.map((rate) => (
            <Card 
              key={rate.id} 
              id={rate.id} 
              name={rate.name} 
              price={rate.price} 
              speed={rate.speed} 
              text={rate.text} 
              isSelected={ isSelected === rate.id } 
              onCardClick={setIsSelected}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;