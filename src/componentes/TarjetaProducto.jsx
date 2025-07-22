
function TarjetaProducto({imagen, nombre, descripcion, precio, agregarAlCarrito}) {
  return (
    <div className="tarjeta">
      <img src={imagen} alt="" />
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <h4>{"$"+precio}</h4>
      <button onClick={agregarAlCarrito}>Añadir al carrito</button>
    </div>
    
  );
}

export default TarjetaProducto;
