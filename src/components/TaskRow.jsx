// Importo la librería 'prop-types' para definir las propiedades esperadas en el componente.
import PropTypes from "prop-types";

// Componente funcional 'TaskRow' que representa una fila de la tabla de tareas.
export const TaskRow = ({ task, toggleTask }) => (
  // Renderizo una fila de la tabla con el nombre de la tarea y una casilla de verificación para completar la tarea.
  <tr key={task.name}>
    <td>
      {/* Nombre de la tarea. */}
      {task.name}
      
      {/* Casilla de verificación para completar la tarea. */}
      <input
        type="checkbox"
        className="done"
        checked={task.done}
        onChange={() => toggleTask(task)}
      />
    </td>
  </tr>
);

// Defino las propiedades esperadas y sus tipos utilizando 'PropTypes'.
TaskRow.propTypes = {
  // La propiedad 'task' debe ser un objeto con las propiedades 'name' (cadena de texto) y 'done' (booleano), y es requerida.
  task: PropTypes.shape({
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,

  // La propiedad 'toggleTask' debe ser una función y es requerida.
  toggleTask: PropTypes.func.isRequired,
};
