import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';

import Home from './components/Home/Home.js'
import About from './components/About/About.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/' component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
