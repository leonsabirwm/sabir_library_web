import './App.css';
import Features from './components/Features';
import { Header } from './components/Header';
import { MyCard } from './components/MyCard';
import { Todos } from './components/Todos';



function App() {
  return (
    <div className="App">
    <Header></Header>
    <Features></Features>
    </div>
  );
}

export default App;
