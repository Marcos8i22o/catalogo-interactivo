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
        {productos.map((producto) => (
          <TarjetaProducto
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
          />
        ))}
      </div>
    </>
  );
}

export default App;
