import './App.css';
import { generateFooter } from './components/Footer/Footer';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import footerData from './data/Footer';

// Creamos la función madre que cargará toda la app web
function App() {
  // Obtenemos el elemento app
  const app = document.getElementById('app');

  // Al establecer el signo igual sin más provocamos que se reinicia la página cuando recargamos
  // evitando de esta manera que se colapse la app sumándose contenido
  app.innerHTML = Header();
  app.innerHTML += Main();
  // Añadimos el nuevo footer al final de la app, este se cargará solo en tablet y mobile
  app.innerHTML += generateFooter(footerData);
}

// Llamamos a la función App al cargar la página
App();

// Escuchamos los cambios de la URL y llamamos a la función App para recargar la página
window.addEventListener('hashchange', App);

export default App;
