// Importo la función 'createRoot' del paquete 'react-dom/client', 
// que se utiliza para crear un punto de entrada reactivo en la aplicación.
import { createRoot } from 'react-dom/client';

// Importo el componente principal de la aplicación desde el archivo 'App.jsx'.
import App from './App.jsx';

// Importo estilos globales para la aplicación desde el archivo 'index.css'.
import './index.css';

// Obtengo el elemento del DOM con el id 'root' donde se montará la aplicación.
const container = document.getElementById('root');

// Creo un punto de entrada reactivo en el elemento del DOM obtenido anteriormente.
const root = createRoot(container);

// Renderizo el componente principal 'App' en el punto de entrada reactivo.
root.render(<App />);