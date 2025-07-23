function Carrito(props) {
  const { productosDelCarrito } = props;
  const cantidadTotal = productosDelCarrito.length;

  return (
    <div className="carrito-contenedor">
      <h2>Mi Carrito ({cantidadTotal} productos)</h2>
      <ul>
        {productosDelCarrito.map((producto) => (
          <li key={producto.id}>{producto.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default Carrito;
