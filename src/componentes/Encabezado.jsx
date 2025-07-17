function Encabezado(props) {
  function manejarCambioDeInput(event) {
    props.onChange(event.target.value);
  }
  return (
    <div>
      <h2>Buscar producto</h2>
      <input type="text" onChange={manejarCambioDeInput} />
    </div>
  );
}

export default Encabezado;
