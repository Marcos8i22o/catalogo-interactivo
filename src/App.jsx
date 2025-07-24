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
    <div className="bg-gray-50 min-h-screen font-sans">
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-8">
          <Encabezado
            categorias={categoriasUnicas}
            onChange={(inputTexto) => {
              setInputTexto(inputTexto);
            }}
            onCategoriaClick={setCategoriaSeleccionada}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {productosFiltrados.length !== 0 ? (
              productosFiltrados
            ) : (
              <h4 className='sm:col-span-2 xl:col-span-3 text-center text-gray-500"'>
                No se encontraron resultados
              </h4>
            )}
          </div>
        </div>
        <div className="lg:col-span-1">
          <Carrito productosDelCarrito={carrito}></Carrito>
        </div>
      </main>
    </div>
  );
}

export default App;
