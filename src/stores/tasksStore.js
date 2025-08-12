import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const initialTasks = [
    {
      title: "Example of a task №1",
      details:
        "The project was created for educational purposes. It is not necessary to enter real data.",
    },
    {
      title: "Example of a task №2",
      details:
        "The project was created for educational purposes. It is not necessary to enter real data.",
    },
    {
      title: "Example of a task №3",
      details:
        "The project was created for educational purposes. It is not necessary to enter real data.",
    }
];

const loadTasks = () => {
  if (!browser) return initialTasks; // На сервере всегда возвращаем initialTasks
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
};


export const tasks = writable(loadTasks());
export const details = writable('');
export const taskTitle = writable('');

export const clearCashTask = () => {
    details.set('');
    taskTitle.set('');
};

// Добавить в начало (O(1))
export const addTask = (title, details) => {
  tasks.update(current => [{ title, details }, ...current]);
};

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

if (browser) {
    tasks.subscribe($tasks => {
        console.log($tasks)
        const dataToSave = $tasks.map(({ title, details }) => ({ title, details }));
        localStorage.setItem('tasks', JSON.stringify(dataToSave));
    });
};