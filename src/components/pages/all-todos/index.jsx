import "./styles.css";
import {Todo} from "../../todo/index";

export const AllTodosPage = () => {
    const todos = [
        {text: "Walk my dog", date:"2021-10-08", color:"blue", isComplete:false},
        {text: "Laundry", date:"2021-10-18", color:"red", isComplete:false},
        {text: "Assignment", date:"2021-10-22", color:"red", isComplete:false}
    ]
    
    return (
        <div className="todos-container">
            { todos.map ((todo) => <Todo text={todo.text} date={todo.date} color={todo.color} isComplete={todo.isComplete}/>)}
        </div>
    )
};