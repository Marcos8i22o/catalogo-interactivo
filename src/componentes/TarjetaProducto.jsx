
function TarjetaProducto({producto, agregarAlCarrito}) {
  return (
    <div className="tarjeta">
      <img src={producto.imagen} alt="" />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <h4>{"$"+producto.precio}</h4>
      <button onClick={()=>{agregarAlCarrito(producto)}}>Añadir al carrito</button>
    </div>
    
  );
}

export default TarjetaProducto;
