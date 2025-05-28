// Defino una constante con la ruta de la API que se va a utiizar en el proyecto
const url = "https://fakestoreapi.com";

// Funcion que devuelve "Hola mundo"
function diceHola() {
  return "Este es el primer proyecto de TaT de NodeJS"
}

// Función para obtener todos los productos
function consultaProductos() {
  return fetch(`${url}/products`)
    .then(response => response.json());
}

// Función para obtener producto por Id
function consultaProductoPorId(id) {
  return fetch(`${url}/products/${id}`)
    .then(response => response.json());
}

// Función para crear producto nuevo
function creaProducto(titulo, precio, categoria) {
  const nuevoProducto = {
    titulo,
    precio: Number(precio),
    categoria
  };
  return fetch(`${url}/products`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(nuevoProducto)
  }).then(response => response.json());
}

// Función para borrar producto por Id
function eliminaProducto(id) {
  return fetch(`${url}/products/${id}`, {
    method: "DELETE",
    headers: {"Content-Type": "application/json"}
  }).then(response => response.json());
}


// Exportamos las funciones para ser invocadas desde index.js
export {
  diceHola,
  consultaProductos,
  consultaProductoPorId,
  creaProducto,
  eliminaProducto
};
