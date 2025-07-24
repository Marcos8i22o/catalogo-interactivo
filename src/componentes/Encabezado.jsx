function Encabezado(props) {
  function manejarCambioDeInput(event) {
    props.onChange(event.target.value);
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Encuentra tu producto
        </h2>
      </div>
      <div className="mb-10">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 bg-gray-50 focus:bg-white shadow-sm"
          onChange={manejarCambioDeInput}
        />
        <button
          onClick={() => props.onCategoriaClick('Todos')}
          className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"

        >
          Todos
        </button>
      </div>
      {props.categorias.map((categoria) => (
        <button
          key={categoria}
          onClick={() => props.onCategoriaClick(categoria)}
          className="bg-gray-200 text-gray-800 m-2 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}

export default Encabezado;
