import './App.css';
import React, {useState} from 'react';
import DisplayTodo from './components/DisplayTodo';


function App() {

  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const itemTodo = {
    desc: newTodo,
    complete: false
  }

    const handleNewTodo = (e) => {
      
      e.preventDefault();

      setTodoList([...todoList, itemTodo]);
      
      setNewTodo("");

    }

    const handleComplete = (index) => {
      const updatedList = todoList.map((item, i) => {
        if (index === i) {
          item.complete = !item.complete;
        }
        return item;
      })

      setTodoList(updatedList);
    }


    const handleItemDelete = (dIndex) => {
      const filteredList = todoList.filter((item, i) => {
          return i !== dIndex;
      });

      setTodoList(filteredList);
    }

  return (
    <div className="content">
      <div className="half">
      <h2> Input a New Todo List Item:</h2>
      
      <form onSubmit={ (e) => handleNewTodo(e) }>
            <label className="label">New Item: </label> 
            <input className="input is-normal" type="text" value={newTodo} onChange={(e) => {setNewTodo(e.target.value)} } />
      
            <input className="button submit" type="submit" value="Add" />
      </form>
      </div>
      <div className="half">
      <h2> Todo List:</h2>

      {todoList.map((newTodo, i) => {
        return <DisplayTodo 
        newTodo={newTodo} 
        handleComplete={handleComplete}
        handleItemDelete={handleItemDelete}
        i={i} 
        />
      })}


      </div>


    </div>
  );
}

export default App;
