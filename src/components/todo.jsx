import React from "react";
import { useState } from "react";
const Todo = ()=>{
    let [value,setValue] = useState("Abcd")
    const [todos,setTodos]=React.useState([]);

    return (

        <div>
            Todo 
            <input value={value} onChange={(e) =>{
                value = e.target.value
            }}/>
             <button onClick={() => {
              setTodos([...todos,{value:value}]);
              setValue("")
             }}>Add</button>

            {todos.map((todo) =>{
                <div> {todo.value}</div>
            })}
        </div>
    )
}
export default Todo