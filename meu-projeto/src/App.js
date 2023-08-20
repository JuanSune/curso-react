import fragHere from './components/fragment_component';
import './App.css';
import SayMyName from './components/SayMyName';

function App() {
  return (
    <div className="App">
      <SayMyName nome={"juan"} idade={"13"} profissao={"Administrador"}></SayMyName>
      <fragHere marca='ferrari'></fragHere>
      <fragHere marca='volkswagen'></fragHere>
    </div>
  );
}

export default App;
