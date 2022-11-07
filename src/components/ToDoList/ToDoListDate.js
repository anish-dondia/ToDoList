import "./ToDoListDate.css";

const ToDoListDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="ToDoList-date">
      <div className="ToDoList-date__month">{month}</div>
      <div className="ToDoList-date__year">{year}</div>
      <div className="ToDoList-date__day">{day}</div>
    </div>
  );
};

export default ToDoListDate;
