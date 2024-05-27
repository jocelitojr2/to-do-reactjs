import styles from './App.module.css';

import './global.css';

import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { Tasks } from './components/Tasks';
import { useState } from 'react';


export interface InterfaceTasks {
  id: number;
  content: string;
  complete: boolean;
}

// const tasks: InterfaceTasks[] = [
//   {
//     id: 1,
//     content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
//     complete: false
//   },
//   {
//     id: 2,
//     content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
//     complete: true
//   },
//   {
//     id: 3,
//     content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
//     complete: true
//   },
// ]
export function App() {
  const [ tasks, setTasks]= useState<InterfaceTasks[]>([]);

  function AddNewTask(content: string) {
    console.log(`handleAddTask => ${content}`);
    setTasks([...tasks, {
      id: tasks.length + 1,
      content: content,
      complete: false,
    }]);
  }

  function RemoveTask(id: number ) {
    console.log(`handleRemoveTask => ${id}`);
    setTasks(tasks.filter(task => task.id!== id));
  }

  function CompleteTask(id: number) {
    setTasks(tasks.map(task => task.id === id ? {...task, complete:!task.complete} : task));
  }

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <NewTask onAddNewTask={AddNewTask} />
        
        <Tasks onCompleteTask={CompleteTask} onRemoveTask={RemoveTask} tasks={tasks} />
      </div>
    </div>
  )
}