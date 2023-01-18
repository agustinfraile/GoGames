import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import GameDetail from './components/GameDetail/GameDetail';
import CreateGame from './components/CreateGame/CreateGame';
import PageNotFound  from './components/PageNotFound/PageNotFound';
import NavBar from './components/NavBar/NavBar';
import Contact from './components/Contact/Contact';
import SearchBar from './components/SearchBar/SearchBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <SearchBar />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/game' component={CreateGame} />
          <Route exact path='/game/:id' component={GameDetail} />
          <Route exact path='/contact' component={Contact} />
          <Route path= '/*' component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;