import TarjetaProducto from './componentes/TarjetaProducto';
import { productos } from './datos';

function App() {
  return (
    <div>
      {productos.map((producto) => (
        <TarjetaProducto
          nombre={producto.nombre}
          precio={producto.precio}
          imagen={producto.imagen}
        />
      ))}
    </div>
  );
}

export default App;
