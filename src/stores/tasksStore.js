import { writable } from 'svelte/store';

const initialTasks = [
    {
      title: "Выписать 50 новых слов в English Assistant",
      details:
        "Среди них должны быть как специализированные термины, так и разговорные слова.",
    },
    {
      title: "Повторить Theory перед собеседованием",
      details: "Сделать упор на технические термины и устойчивые выражения.",
    },
    {
      title: "Подготовить карточки для тренировки",
      details: "Сгенерировать карточки для запоминания слов и выражений.",
    },
    {
      title: "Выписать 50 новых слов в English Assistant",
      details:
        "Среди них должны быть как специализированные термины, так и разговорные слова.",
    },
    {
      title: "Повторить Theory перед собеседованием",
      details: "Сделать упор на технические термины и устойчивые выражения.",
    },
    {
      title: "Подготовить карточки для тренировки",
      details: "Сгенерировать карточки для запоминания слов и выражений.",
    },
    {
      title: "Подготовить карточки для тренировки",
      details: "Сгенерировать карточки для запоминания слов и выражений.",
    },
    {
      title: "Подготовить карточки для тренировки",
      details: "Сгенерировать карточки для запоминания слов и выражений.",
    },
];

export const tasks = writable(initialTasks);
export const details = writable('');
export const taskTitle = writable('');

// Добавить в начало (O(1))
export const addTask = (title, details) => {
  tasks.update(current => [{ title, details }, ...current]);
};

export const clearCashTask = () => {
    details.set('');
    taskTitle.set('');
}

// Удалить по индексу (O(1))
export const removeTask = (index) => {
  tasks.update(current => {
    const updated = [...current];
    updated.splice(index, 1);
    return updated;
  });
};

// Обновить по индексу (O(1))
export const updateTask = (index, title, details) => {
  tasks.update(current => {
    const updated = [...current];
    updated[index] = { title, details };
    return updated;
  });
};