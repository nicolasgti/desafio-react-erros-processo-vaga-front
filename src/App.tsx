import { PlusCircle, ClipboardText } from "phosphor-react";
import { useEffect, useState } from "react"; //Remoçao de hooks desnecessários
import { v4 as uuidv4 } from "uuid";
import styles from "./app.module.css";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

interface Task { // Tipando o array de tarefas para melhor consistencia de dados
  id: string;
  title: string;
  isDeleted: boolean;
  isCompleted: boolean;
}

const data = [
  {
    id: uuidv4(),
    title: "Tarefa 1",
    isDeleted: false,
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "Tarefa 2",
    isDeleted: false,
    isCompleted: false,
  },
];

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]); // Inicializando o estado com um array vazio com o tipo Task
  const [newTask, setNewTask] = useState<string>(""); 
  const [totalCompleted, setTotalCompleted] = useState(0)

  useEffect(() => {
   setTasks(data) 
  }, []) // Adiconando uma dependencia vazia para evitar loop infinito

  const handleNewTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value); //Corrigindo o tipo do evento, removendos os "anys"
  };
  
  const handleCreateTask = (event: React.FormEvent) => { //Corrigindo o tipo do evento, removendos os "anys"
    event.preventDefault();
  
    setTasks([
      ...(tasks || []),
      {
        id: uuidv4(),
        title: newTask,
        isDeleted: false,
        isCompleted: false,
      },
    ]);
    setNewTask("");
  };

  const completeTask = (id: string) => { // corrigida a sobrescritura de estado  desnecessária
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id: string) => { // Corrigido o nome da constante
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== id);
    setTasks(tasksWithoutDeletedOne);
  };

  useEffect(() => {
    const completedCount = tasks.filter((task) => task.isCompleted).length;
    setTotalCompleted(completedCount);
  }, [tasks]); // Atualiza sempre que `tasks` mudar

  

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <form className={styles.newText} onSubmit={handleCreateTask}>
          <input
            type="text"
            placeholder="Adicione uma tarefa"
            value={newTask}
            onChange={handleNewTaskChange}
            required
          />
          {/* certificndo que o botão só é habilitado quando o input não está vazio */}
          <button type="submit" disabled={!newTask.trim()}> 
            Criar
            <PlusCircle size={20} />
          </button>
        </form>
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            <div>
              <strong>Tarefas criadas</strong>
              <span>{tasks.length}</span>
            </div>

            <div>
              <strong>Concluídas</strong>
              <span>
                {totalCompleted} de {tasks.length}
              </span>
            </div>
          </div>
          <div className={styles.contentBox}>
            {tasks.length > 0 ? ( //Garantingo que a lista de tarefas seja sempre uma lista e nao undefined
              tasks.map((task) => (
                <Task
                  key={task.id} // Adicionado a prop `key` para evitar warnings
                  id={task.id}
                  checked={task.isCompleted}
                  title={task.title}
                  onComplete={completeTask}
                  onDelete={deleteTask}
                />
                ))
              ) : (
                <>
                  <ClipboardText size={56} />
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <small>Crie tarefas e organize seus itens a fazer</small>
                </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
