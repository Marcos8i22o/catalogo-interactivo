function Carrito(props) {
  const { productosDelCarrito, eliminarDelCarrito } = props;
  const cantidadTotal = productosDelCarrito.length;

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-md mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Mi Carrito ({cantidadTotal} producto{cantidadTotal !== 1 ? "s" : ""})
      </h2>

      <ul className="space-y-3">
        {productosDelCarrito.map((producto) => (
          <li
            key={producto.id}
            className="bg-white px-4 py-3 rounded-lg shadow-sm flex items-center justify-between"
          >
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800">
                {producto.nombre}
              </span>
              <span className="text-sm text-gray-500">
                {producto.cantidad} unidad{producto.cantidad !== 1 ? 'es' : ''}
              </span>
            </div>

            <button
              onClick={() => eliminarDelCarrito(producto)}
              className="text-red-500 hover:text-white hover:bg-red-500 border border-red-500 px-3 py-1.5 rounded-md text-sm font-medium transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
              title="Eliminar"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carrito;