
function TarjetaProducto({producto, agregarAlCarrito}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-fit rounded-md mb-4" />
      <h2 className="text-xl font-semibold mb-2">{producto.nombre}</h2>
      <p className="text-gray-600 mb-2">{producto.descripcion}</p>
      <h4 className="text-lg font-bold text-green-600 mb-4">{"$"+producto.precio}</h4>
      <button onClick={()=>{agregarAlCarrito(producto)}} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200">Añadir al carrito</button>
    </div>
    
  );
}

export default TarjetaProducto;
