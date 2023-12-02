// Importo el hook 'useState' de React para gestionar el estado en el componente.
import { useState } from "react";

// Importo la librería 'prop-types' para definir las propiedades esperadas en el componente.
import PropTypes from "prop-types";

// Componente funcional 'TaskCreator' que permite al usuario crear nuevas tareas.
export const TaskCreator = ({ createNewTask }) => {
  // Estado para almacenar el nombre de la nueva tarea.
  const [newTaskName, setNewTaskName] = useState("");

  // Función que se ejecuta al enviar el formulario para crear una nueva tarea.
  const handleSubmit = (e) => {
    // Evito que el formulario se envíe si el nombre de la tarea está vacío.
    if (newTaskName.trim() === "") {
      alert("Por favor ingresar una tarea");
      return;
    }

    // Previene el comportamiento por defecto del formulario.
    e.preventDefault();

    // Llamo a la función 'createNewTask' para crear la nueva tarea.
    createNewTask(newTaskName);

    // Limpio el campo de entrada después de crear la tarea.
    setNewTaskName("");
  };

  // Renderizo el formulario para ingresar el nombre de la nueva tarea.
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        {/* Campo de entrada para el nombre de la nueva tarea. */}
        <input
          type="text"
          placeholder="Ingresar tarea"
          className="input-task-creator"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        {/* Botón para guardar la nueva tarea. */}
        <button>Guardar</button>
      </form>
    </div>
  );
};

// Defino las propiedades esperadas y sus tipos utilizando 'PropTypes'.
TaskCreator.propTypes = {
  // La propiedad 'createNewTask' debe ser una función y es requerida.
  createNewTask: PropTypes.func.isRequired,
};
