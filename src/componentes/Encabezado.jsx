function Encabezado(props) {
  function manejarCambioDeInput(event) {
    props.onChange(event.target.value);
  }

  
  return (
    <div>
      <h2>Buscar producto</h2>
      <input type="text" onChange={manejarCambioDeInput} />
      <button onClick={()=>props.onCategoriaClick("Todos")}>Todos</button>
      {props.categorias.map((categoria) => (
        <button key={categoria} onClick={()=> props.onCategoriaClick(categoria)}>
          {categoria}
        </button>
        
      ))}
      
    </div>
  );
}

export default Encabezado;
