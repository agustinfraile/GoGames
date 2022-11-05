import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/' component={Landing} />
        <Route path='/home' component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
