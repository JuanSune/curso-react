import "./App.css"
import { BrowserRouter as Router,Link,Routes,Route } from "react-router-dom" 
import Contato from "./pages/Contato"
import Empresa from "./pages/Empresa"
import Home from "./pages/Home"
import Navbar from "./pages/Navbar"


//Existem varias formas de fazer algo em HTML, tanto usando React JS 
//ou usando Express, USE COM SABEDORIA -- Não se esqueça do mongoose - 
//mongoDB

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
          <Route path="/Contato"
          element={<Contato />}>
            
          </Route>
          <Route path="/Empresa"
          element={<Empresa />}>
            
          </Route>
          <Route exact path="/" element={<Home />}>
            
          </Route>
      </Routes>
      </Router>
    

    </div>
  )
}

export default App
