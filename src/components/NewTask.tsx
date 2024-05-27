import { FormEvent, useState } from 'react';
import styles from './NewTask.module.css';
import { PlusCircle } from '@phosphor-icons/react';

export function NewTask({ onAddNewTask }: { onAddNewTask: (arg: string) => void }) {
  const [newTaskContent, setNewTaskContent] = useState('');

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();

    onAddNewTask(newTaskContent);
    setNewTaskContent('');
  }

  return (
    <form className={styles.newtask}>
      <input 
        type='text' 
        placeholder='Adicione uma nova tarefa'
        onChange={(e) => setNewTaskContent(e.target.value)}
        value={newTaskContent} 
      />
      <button 
        onClick={handleAddNewTask} 
        disabled={newTaskContent.length === 0}
        type="submit"
      >
        Criar
        <PlusCircle size={22} />
      </button>
    </form>
  );
}