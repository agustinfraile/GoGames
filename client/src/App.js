import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import GameDetail from './components/GameDetail/GameDetail';
import CreateGame from './components/CreateGame/CreateGame';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/game' component={CreateGame} />
        <Route path='/game/:id' component={GameDetail} />
      </div>
    </BrowserRouter>
  );
}

export default App;