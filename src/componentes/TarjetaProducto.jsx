
function TarjetaProducto({imagen, nombre, descripcion, precio}) {
  return (
    <div className="tarjeta">
      <img src={imagen} alt="" />
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <h4>{"$"+precio}</h4>
    </div>
    
  );
}

export default TarjetaProducto;
