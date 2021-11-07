import './App.css'
import Person from './components/Person';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person 
          firstName={"Jane"}
          lastName={"Doe"}
          age = {6}
          hairColor = {"Purple"}
        />

        <Person 
          firstName={"Keith"}
          lastName={"McDaniel"}
          age = {26}
          hairColor = {"Red"}
        />

          </header>
    </div>
  );
}

export default App;
