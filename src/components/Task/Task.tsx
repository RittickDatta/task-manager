import "./Task.scss";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { taskSchema } from "./taskSchema";
import { addTask } from "../../store/slices/taskSlice";
import { ITask } from "../../models/Task";
import { AppDispatch } from "../../store/store";

const Task = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(taskSchema),
  });

  const handleFormSubmit = (data: ITask) => {
    dispatch(addTask(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="form-add-task">
      <label htmlFor="task-title" className="form-control-label">
        Title
      </label>
      <div>
        <input
          {...register("title")}
          type="text"
          name="title"
          id="task-title"
        />
        <p>{errors.title?.message}</p>
      </div>

      <label htmlFor="task-description" className="form-control-label">
        Description
      </label>
      <div>
        <textarea
          {...register("description")}
          cols={30}
          rows={2}
          name="description"
          id="task-description"
        />
        <p>{errors.description?.message}</p>
      </div>

      <button className="add-task-form-btn" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default Task;
