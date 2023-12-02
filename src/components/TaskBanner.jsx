// Importo la librería 'prop-types' para definir las propiedades esperadas en el componente.
import PropTypes from "prop-types";

// Componente funcional 'TaskBanner' que muestra el título del Trabajo Práctico Integrador.
export const TaskBanner = ({ userName }) => (
  // Renderizo el título con el nombre del usuario.
  <h1>
    Trabajo Práctico Integrador de{" "}
    <span className="text-info">{userName}</span>
  </h1>
);

// Defino las propiedades esperadas y sus tipos utilizando 'PropTypes'.
TaskBanner.propTypes = {
  // La propiedad 'userName' debe ser una cadena de texto y es requerida.
  userName: PropTypes.string.isRequired,
};
