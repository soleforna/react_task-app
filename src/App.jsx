// Importo los hooks 'useState' y 'useEffect' de React para gestionar el estado y los efectos secundarios, respectivamente.
import { useState, useEffect } from "react";

// Importo componentes específicos utilizados en la aplicación.
import { TaskBanner } from "./components/TaskBanner";
import { TaskCreator } from "./components/TaskCreator";
import { VisibilityControl } from "./components/VisibilityControl";
import { TaskTable } from "./components/TaskTable";
import { Container } from "./components/Container";

// Defino el componente principal de la aplicación.
function App() {
  // Estado para almacenar el nombre del usuario.
  const [userName, setUserName] = useState("App realizada por: María Soledad Fornasier");

  // Estado para almacenar la lista de tareas.
  const [taskItems, setTaskItems] = useState([]);

  // Estado para controlar la visibilidad de las tareas completadas.
  const [showCompleted, setshowCompleted] = useState(false);

  // Efecto que se ejecuta al cargar la aplicación para recuperar las tareas almacenadas en el almacenamiento local.
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
    // Actualizo el nombre del usuario después de cargar las tareas.
    setUserName("Sole Fornasier");
  }, []);

  // Efecto que se ejecuta cuando cambia la lista de tareas para almacenarlas en el almacenamiento local.
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  // Función para crear una nueva tarea si no existe una tarea con el mismo nombre.
  const createNewTask = (taskName) => {
    if (!taskItems.find((t) => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  // Función para cambiar el estado de una tarea (completada o no completada).
  const toggleTask = (task) =>
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  // Función para limpiar las tareas completadas.
  const cleanTasks = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
    setshowCompleted(false);
  };

  // Renderización del componente principal de la aplicación.
  return (
    <main className="main">
      {/* Componente que muestra el banner con el nombre del usuario y la cantidad de tareas. */}
      <TaskBanner userName={userName} taskItems={taskItems} />

      {/* Contenedor principal que agrupa los diferentes componentes de la aplicación. */}
      <Container>
        {/* Componente para crear nuevas tareas. */}
        <TaskCreator createNewTask={createNewTask} />

        {/* Tabla que muestra la lista de tareas. */}
        <TaskTable tasks={taskItems} toggleTask={toggleTask} />

        {/* Control de visibilidad para mostrar/ocultar tareas completadas. */}
        <VisibilityControl
          description="tareas realizadas"
          isChecked={showCompleted}
          callback={(checked) => setshowCompleted(checked)}
          cleanTasks={cleanTasks}
        />

        {/* Condición para mostrar la tabla de tareas completadas si 'showCompleted' es true. */}
        {showCompleted && (
          <TaskTable
            tasks={taskItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  );
}

// Exporto el componente principal para su uso en otras partes de la aplicación.
export default App;
