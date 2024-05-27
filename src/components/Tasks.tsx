import styles from './Tasks.module.css';
import { Trash, ClipboardText, Check } from '@phosphor-icons/react';
import { InterfaceTasks } from '../App';
// CheckCircle

export function Tasks({ tasks, onRemoveTask, onCompleteTask }: { tasks: InterfaceTasks[], onRemoveTask: (arg: number) => void, onCompleteTask: (arg: number) => void  }) {
  const totalTasksCompleted = countTasksCompleted(tasks);

  function countTasksCompleted(tasks: InterfaceTasks[]) {
    let count = 0;
    tasks.forEach(task => {
      if (task.complete) {
        count++;
      }
    });
    return count;
  }

  function handleRemoveTask(id: number) {
    onRemoveTask(id);
  }

  function handleCheckedTask(id: number) {
    onCompleteTask(id);
  }

  return (
    <>
      <div className={styles.taskHeader}>
        <div className={styles.tasksCreated}>
          <strong>Tarefas criadas</strong>
          <span className={styles.tasksCounter}>{tasks.length}</span>
        </div>
        <div className={styles.tasksCompleted}>
          <strong>Concluídas</strong>
          <span className={styles.tasksCounter}>
            { tasks.length > 0 ? `${totalTasksCompleted} de ${tasks.length}` : `0`}
          </span>
        </div>
      </div>

      <ul className={styles.tasksList}>
        { tasks.length > 0 
          ?
            tasks.map(task => {
              return (
                <li className={styles.taskItem} key={task.id}>
                  <div className={styles.taksContent}>
                    <button 
                      className={ task.complete ? styles.taskButtonChecked : styles.taskButtonNoChecked}
                      onClick={() => handleCheckedTask(task.id)}
                    >
                      { task.complete &&
                        <Check size={17.45} />
                      }
                    </button>
                    <span>{task.content}</span>
                  </div>
                  <button 
                    onClick={() => handleRemoveTask(task.id)} 
                    className={styles.taskButtonDelete}
                  >
                    <Trash size={24} />
                  </button>
                </li>
              )
            })
          :
          <li className={styles.taskNoItem}>
            <div className={styles.taksNoItemContent}>
              <ClipboardText size={56} />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </li>
        }
      </ul>
    </>
  )
}