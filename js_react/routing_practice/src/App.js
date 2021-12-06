import './App.css';
import {Router} from '@reach/router';
import HomeComponent from './components/Home';
import NumberWordComponent from './components/NumberWord';
import CSSComponent from './components/CSS';

function App() {
  return (
    <div className="App">
      <Router>
        <HomeComponent path="/home/" />
        <NumberWordComponent path="/:id/" />
        <CSSComponent path="/:word/:textColor/:backgroundColor/" />
      </Router>
    </div>
  );
}

export default App;
