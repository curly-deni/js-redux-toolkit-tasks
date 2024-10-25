const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  const result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const addDate = (store) => (next) => (action) => {
  // BEGIN (write your solution here)
  if (action.type === 'TASK_ADD') {
    let { task } = action.payload;
    task.text = `Задача на ${new Date().toLocaleDateString('ru-RU')}: ${task.text}`;
  }

  return next(action)
  // END
};

export default { logger, addDate };
