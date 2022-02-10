import { FaTimes } from "react-icons/fa";

function Task(props) {
  return (
    <div className="task">
      <h3>
        {props.task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => props.onDelete(props.task.id)}
        />
      </h3>
      <p>{props.task.day}</p>
    </div>
  );
}

export default Task;
