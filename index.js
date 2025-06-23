// Autor: Silvio J. Giles
// Comisión 25024
// Preentrega de Proyecto - Curso NodeJS - Talento Tech

// Importo las funciones definidas en "servicios.js"
import {
  consultaProductos,
  consultaProductoPorId,
  creaProducto,
  eliminaProducto,
} from './modulos/servicios.js';

// Desestructuro los argumentos que recibimos de la terminal
const [,, metodo, recurso, param1, param2, param3] = process.argv;

// Analizo el método invocado y verifico los parámetros recibidos
// GET --> consultaProductos 
// GET con Parámetros adicionales --> consultaProductosPorId
// POST --> creaProducto
// DELETE --> eliminaProducto
// Si no se reconoce ninguno --> Comando no reconocido

if (metodo === "GET") {
  if (recurso === "products" && !param1) {
    consultaProductos()
      .then(data => console.log(data))
      .catch(err => console.error(err));
  } else if (recurso && recurso.startsWith("products/")) {
    const id = recurso.split("/")[1];
    consultaProductoPorId(id)
      .then(data => console.log(data))
      .catch(err => console.error(err));
  } else {
    console.log("Comando GET inválido");
  }
} else if (metodo === "POST" && recurso === "products") {
  if (!param1 || !param2 || !param3) {
    console.log("Faltan parámetros para crear producto");
  } else {
    creaProducto(param1, param2, param3)
      .then(data => console.log("Producto creado:", data))
      .catch(err => console.error(err));
  }
} else if (metodo === "DELETE" && recurso && recurso.startsWith("products/")) {
  const id = recurso.split("/")[1];
  eliminaProducto(id)
    .then(data => console.log("Producto eliminado:", data))
    .catch(err => console.error(err));
} else {
  console.log("Comando no reconocido o faltan parámetros");
}
