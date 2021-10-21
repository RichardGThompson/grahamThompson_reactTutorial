import "./styles.css";
import React, {useState, useEffect, useContext} from 'react';
import PropTypes from "prop-types";
import { GoTrashcan, GoCheck } from 'react-icons/go';

import { TodosContext } from "../../context/todos-context";

export const Todo = (props) => {

    const todosContext = useContext(TodosContext);

    const [isComplete, setIsComplete] = useState(false);

    useEffect( () => {
        setIsComplete(props.isComplete);
    }, []);

    useEffect( () => {
        todosContext.updateTodo(props.todoId, isComplete);
    }, [isComplete]);

    const toggleCompleteTodo = () => {
        setIsComplete(!isComplete);
    }

    const deleteTodo = () => {
        todosContext.deleteTodo(props.todoId);
    }

    return (
        <div className={`todo ${props.color}`} style={isComplete ? {opacity: 0.2} : {}}>
            <div>
                <p className="todo-text">{props.text}</p>
                <p className="todo-date">Due Date: {props.date}</p>
            </div>
            <div className="todo-buttons">
                <button className="todo-btn todo-complete" onClick={toggleCompleteTodo}>
                    <GoCheck className="todo-icon" style={{ fontSize:"35px" }}/>
                </button>
                <button className="todo-btn todo-remove" onClick={deleteTodo}>
                    <GoTrashcan className="todo-icon" style={{fontSize:"35px"}}/>
                </button>
            </div>
            
            {/* <p className="todo-color">{props.color}</p> */}
            
        </div>
    )
}

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    color: PropTypes.string,
    priority: PropTypes.bool,
    isComplete: PropTypes.bool.isRequired
}

Todo.defaultProps = {
    text: "",
    date: "",
    color: "gray",
    priority: false,
    isComplete: false
}