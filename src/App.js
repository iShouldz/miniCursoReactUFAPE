import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/HelloWorld/HelloWorld';
import Contador from './Components/Contador/Contador';

function App() {
  return (
    <div className='App'>
      
      <HelloWorld name={'Pedro'}/>
      
      <Contador inicio={1} valorIncremento={2}/>
    </div>
  );
}

export default App;
