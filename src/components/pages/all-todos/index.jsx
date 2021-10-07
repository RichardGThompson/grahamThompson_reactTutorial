import "./styles.css";
import {Todo} from "../../todo/index";

export const AllTodosPage = () => {
    return (
        <div>
            <Todo
                text="Walk my dog" date="2021-10-08" color="red"
            />
            
        </div>
    )
};