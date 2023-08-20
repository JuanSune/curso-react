
import './App.css';
import SayMyName from './components/SayMyName';
import FragJSX from './components/Fragment_component'

function App() {
  return (
    <div className="App">
      <SayMyName nome={"juan"} idade={"13"} profissao={"Administrador"}></SayMyName>
     <FragJSX nome='Juan' data='Boa Tarde'></FragJSX>
      
    </div>
  );
}

export default App;
