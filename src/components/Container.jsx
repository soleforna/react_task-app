// Importo la librería 'prop-types' para definir las propiedades esperadas en el componente.
import PropTypes from "prop-types";

// Componente funcional 'Container' que sirve como contenedor principal para la aplicación.
export function Container({ children }) {
  // Renderiza un contenedor con un título y un contenedor hijo que contiene los elementos hijos.
  return (
    <div className="container">
      {/* Título del contenedor principal. */}
      <h2>App de Tareas</h2>
      
      {/* Contenedor hijo que alberga los elementos hijos pasados al componente. */}
      <div className="hijo">{children}</div>
    </div>
  );
}

// Defino las propiedades esperadas y sus tipos utilizando 'PropTypes'.
Container.propTypes = {
  // La propiedad 'children' debe ser un nodo React y es requerida.
  children: PropTypes.node.isRequired,
};
