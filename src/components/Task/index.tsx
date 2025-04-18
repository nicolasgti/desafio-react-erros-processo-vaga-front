import { Trash } from "phosphor-react";
import styles from "./task.module.css";

interface TaskProps { // Definicao de interface para as props
  id: string;
  checked: boolean;
  title: string;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export function Task({ checked, title, id, onComplete, onDelete }: TaskProps) {
  const handleCompleteTask = () => {
    onComplete(id);
  };

  const handleDeleteTask = () => {
    onDelete(id);
  };

  return (
    <div className={styles.task}>
      <div>
        <input
          type="checkbox"
          id={`task-${id}`} // Adicionando id para acessibilidade
          name="task"
          checked={checked}
          onChange={handleCompleteTask} // Corrigido para `onChange` para evitar warnings
        />
        <label htmlFor={`task-${id}`}>{title}</label>
      </div>
      <button
        type="button"
        onClick={handleDeleteTask} 
        aria-label={`Deletar a tarefa ${title}`} // Adicionando aria-label para acessibilidade
      >
        <Trash size={24} />
      </button>
    </div>
  );
}