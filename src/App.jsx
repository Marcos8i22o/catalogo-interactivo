import Encabezado from './componentes/Encabezado';
import TarjetaProducto from './componentes/TarjetaProducto';
import Carrito from './componentes/Carrito';
import { productos } from './datos';
import { useState } from 'react';

function App() {
  const [inputTexto, setInputTexto] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');
  const [carrito, setCarrito] = useState([]);

  const categoriasUnicas = [
    ...new Set(productos.map((producto) => producto.categoria)),
  ];

  function agregarAlCarrito(producto) {
    setCarrito([...carrito, producto]);
  }

  const productosFiltrados = productos
    .filter(
      (producto) =>
        producto.nombre.toLowerCase().includes(inputTexto.toLowerCase()) &&
        (categoriaSeleccionada === 'Todos' ||
          producto.categoria === categoriaSeleccionada),
    )
    .map((producto) => (
      <TarjetaProducto
        key={producto.id}
        producto={producto}
        agregarAlCarrito={agregarAlCarrito}
      />
    ));

  return (
    <>
      <Encabezado
        categorias={categoriasUnicas}
        onChange={(inputTexto) => {
          setInputTexto(inputTexto);
        }}
        onCategoriaClick={setCategoriaSeleccionada}
      />
      <Carrito productosDelCarrito={carrito}></Carrito>
      <div className="contenedor-productos">
        {productosFiltrados.length !== 0 ? (
          productosFiltrados
        ) : (
          <h4>No se encontraron resultados</h4>
        )}
      </div>
    </>
  );
}

export default App;
