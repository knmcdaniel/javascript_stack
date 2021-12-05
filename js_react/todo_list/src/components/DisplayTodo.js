const DisplayTodo = (props) => {
    const todoClasses = [];

    if (props.newTodo.complete) {
      todoClasses.push("line-through");
    }
  
    return (
      <div key={props.i}>
        <h4> Task: <span className={todoClasses.join("")}>{props.newTodo.desc}</span> </h4>
        <p>Is the task completed? <input onChange={(e) => props.handleComplete(props.i)} checked={props.newTodo.complete} type="checkbox"/></p>
        <button className="button submit"onClick={(e) => {props.handleItemDelete(props.i)}}>Delete Task</button>
      </div>
    )
}

export default DisplayTodo;