// Importo la librería 'prop-types' para definir las propiedades esperadas en el componente.
import PropTypes from "prop-types";

// Componente funcional 'VisibilityControl' que proporciona controles para cambiar la visibilidad de las tareas completadas.
export const VisibilityControl = ({ isChecked, callback, description, cleanTasks }) => {
  // Función para manejar la acción de borrar tareas completadas.
  const handleDelete = () => {
    // Muestro un mensaje de confirmación antes de eliminar las tareas.
    if (window.confirm(`¿Desea eliminar ${description}?`)) {
      cleanTasks();
    }
  };

  // Renderizo los controles de visibilidad y el botón para borrar tareas completadas.
  return (
    <div className="controlVisibility">
      {/* Checkbox para cambiar la visibilidad de las tareas completadas */}
      <div className="form-check form-switch">
        <input
          type="checkbox"
          className="form-check-input"
          checked={isChecked}
          onChange={(e) => callback(e.target.checked)}
        />
        <label htmlFor="form-check-label">Mostrar {description}</label>
      </div>

      {/* Botón para borrar tareas completadas */}
      <button onClick={handleDelete}>
        Borrar
      </button>
    </div>
  );
};

// Defino las propiedades esperadas y sus tipos utilizando 'PropTypes'.
VisibilityControl.propTypes = {
  // La propiedad 'isChecked' debe ser un booleano y es requerida.
  isChecked: PropTypes.bool.isRequired,

  // La propiedad 'callback' debe ser una función y es requerida.
  callback: PropTypes.func.isRequired,

  // La propiedad 'description' debe ser una cadena de texto y es requerida.
  description: PropTypes.string.isRequired,

  // La propiedad 'cleanTasks' debe ser una función y es requerida.
  cleanTasks: PropTypes.func.isRequired,
};
