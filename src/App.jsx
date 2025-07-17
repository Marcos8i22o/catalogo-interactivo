import Encabezado from './componentes/Encabezado';
import TarjetaProducto from './componentes/TarjetaProducto';
import { productos } from './datos';
import { useState } from 'react';

function App() {
  const [inputTexto, setInputTexto] = useState('');

  return (
    <>
      <Encabezado
        onChange={(inputTexto) => {
          setInputTexto(inputTexto);
        }}
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
