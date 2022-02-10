import Task from "./Task";


function Tasks(props) {
    return (  
        <>
            {props.tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={props.onDelete}></Task>
            ))}
        </>
    );
}

export default Tasks;