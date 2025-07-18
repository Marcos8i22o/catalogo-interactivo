import Encabezado from './componentes/Encabezado';
import TarjetaProducto from './componentes/TarjetaProducto';
import { productos } from './datos';
import { useState } from 'react';

function App() {
  const [inputTexto, setInputTexto] = useState('');
  const [botonCategoria, setBotonCategoria] = useState('');

  const categoriasUnicas = [...new Set(productos.map(producto => producto.categoria))]     


  return (
    <>
      <Encabezado
        categorias={categoriasUnicas}
        onChange={(inputTexto) => {
          setInputTexto(inputTexto);
        }}
        onClick={(botonCategoria) => {setBotonCategoria(botonCategoria)}}
      />
      <div className="contenedor-productos">
        {productos
          .filter((producto) => producto.nombre.toLowerCase().includes(inputTexto.toLowerCase()))
          .map((producto)=> (
            <TarjetaProducto
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
              descripcion={producto.descripcion}
            />
          ))}
      </div>
    </>
  );
}

export default App;
