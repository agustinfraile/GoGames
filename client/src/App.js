import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' component={Landing} />
      </div>
    </BrowserRouter>
  );
}

export default App;
