
function TarjetaProducto(props) {
  return (
    <div>
      <h2>{props.nombre}</h2>
      <h4>{"$"+props.precio}</h4>
      <img src={props.imagen} alt="" />
    </div>
    
  );
}

export default TarjetaProducto;
