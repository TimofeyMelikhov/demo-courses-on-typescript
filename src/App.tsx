import React from 'react';
import './App.css';
import LineTitle from './components/LineTitle/LineTitle'
import Catalog from './components/Catalog/Catalog'

const App: React.FC = () => {
  return (
    <div className="App">
      <LineTitle title='Демо курсы' />
      <Catalog />
    </div>
  );
}

export default App;
