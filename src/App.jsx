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
    
    const productoExistente = carrito.find(
      (productoEnElCarrito) => productoEnElCarrito.id === producto.id,
    );

    if (productoExistente) {
      const carritoActualizado = carrito.map((productoEnElCarrito) => {
        if (productoEnElCarrito.id === producto.id) {
          return {
            ...productoEnElCarrito,
            cantidad: productoEnElCarrito.cantidad + 1,
          };
        } else {
          return productoEnElCarrito;
        }
      });
      setCarrito(carritoActualizado);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
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
