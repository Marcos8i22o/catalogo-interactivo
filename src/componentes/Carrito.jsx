function Carrito(props) {
  const { productosDelCarrito } = props;
  const cantidadTotal = productosDelCarrito.length;

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Mi Carrito ({cantidadTotal} productos)
      </h2>
      <ul className="space-y-2">
        {productosDelCarrito.map((producto) => (
          <li
            key={producto.id}
            className="bg-white p-3 rounded shadow-sm flex justify-between items-center"
          >
            <span className="font-medium">{producto.nombre}</span>{' '}
            <span className="text-sm text-gray-600">
              {producto.cantidad} unidad {producto.cantidad !==1 ? "es":""}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carrito;
