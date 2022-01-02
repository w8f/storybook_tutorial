import { createStore } from "redux";

export const actions = {
  ARCHIVED_TASK: "ARCHIVED_TASK",
  PIN_TASK: "PIN_TASK",
};

export const archivedTask = (id) => ({ type: actions.ARCHIVED_TASK, id });
export const pinTask = (id) => ({ type: actions.PIN_TASK, id });

const taskReducer = (taskState) => {
  return (state, action) => {
    return {
      ...state,
      tasks: state.tasks.map((task) =>
        task.id === action.id ? { ...task, state: taskState } : task
      ),
    };
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ARCHIVED_TASK:
      return taskReducer("TASK_ARCHIVED")(state, action);
    case actions.PIN_TASK:
      return taskReducer("TASK_PINNED")(state, action);
    default:
      return state;
  }
};

const defaultTasks = [
  { id: "1", title: "Something", state: "TASK_INBOX" },
  { id: "2", title: "Something more", state: "TASK_INBOX" },
  { id: "3", title: "Something else", state: "TASK_INBOX" },
  { id: "4", title: "Something again", state: "TASK_INBOX" },
];

export default createStore(reducer, { task: defaultTasks });
