
function TarjetaProducto(props) {
  return (
    <div className="tarjeta">
      <img src={props.imagen} alt="" />
      <h2>{props.nombre}</h2>
      <p>{props.descripcion}</p>
      <h4>{"$"+props.precio}</h4>
    </div>
    
  );
}

export default TarjetaProducto;
