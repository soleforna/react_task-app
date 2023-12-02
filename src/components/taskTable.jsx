// Importo la librería 'prop-types' para definir las propiedades esperadas en el componente.
import PropTypes from "prop-types";

// Importo el componente 'TaskRow' para representar cada fila de la tabla de tareas.
import { TaskRow } from "./TaskRow";

// Componente funcional 'TaskTable' que muestra una tabla de tareas.
export function TaskTable({ tasks, toggleTask, showCompleted = false }) {
  // Función que filtra las tareas basándose en su estado de completado y las mapea a componentes 'TaskRow'.
  const taskTableRows = (doneValue) =>
    tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ));

  // Renderizo la tabla con encabezados y filas de tareas.
  return (
    <table className="table">
      {/* Encabezado de la tabla */}
      <thead>
        <tr className="table-primary">
          <th>Tareas</th>
        </tr>
      </thead>

      {/* Cuerpo de la tabla con filas de tareas */}
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
}

// Defino las propiedades esperadas y sus tipos utilizando 'PropTypes'.
TaskTable.propTypes = {
  // La propiedad 'tasks' debe ser un array de objetos que contienen las propiedades 'name' (cadena de texto) y 'done' (booleano), y es requerida.
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,

  // La propiedad 'toggleTask' debe ser una función y es requerida.
  toggleTask: PropTypes.func.isRequired,

  // La propiedad 'showCompleted' es opcional y debe ser un booleano.
  showCompleted: PropTypes.bool,
};
