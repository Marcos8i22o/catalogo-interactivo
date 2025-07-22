import Encabezado from './componentes/Encabezado';
import TarjetaProducto from './componentes/TarjetaProducto';
import { productos } from './datos';
import { useState } from 'react';

function App() {
  const [inputTexto, setInputTexto] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

  const categoriasUnicas = [
    ...new Set(productos.map((producto) => producto.categoria)),
  ];

  const productosFiltrados = productos
          .filter(
            (producto) =>
              producto.nombre
                .toLowerCase()
                .includes(inputTexto.toLowerCase()) &&
              (categoriaSeleccionada === 'Todos' ||
                producto.categoria === categoriaSeleccionada),
                
          )
          .map((producto) => (
            <TarjetaProducto
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
              descripcion={producto.descripcion}
            />
            
          ))

  return (
    <>
    
      <Encabezado
        categorias={categoriasUnicas}
        onChange={(inputTexto) => {
          setInputTexto(inputTexto);
        }}
        onCategoriaClick={setCategoriaSeleccionada}
      />
      <div className="contenedor-productos">
        {productosFiltrados.length !== 0 ? productosFiltrados : <h4>No se encontraron resultados</h4>}
        
      </div>

    </>
  );
}

export default App;
