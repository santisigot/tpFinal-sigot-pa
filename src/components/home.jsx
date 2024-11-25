import '../index.css';
import { Input } from '@/components/ui/input';
import PelisApi from '../hooks/PelisApi';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Peliculas() {
  const [buscarPeli, setBuscarPeli] = useState('');
  const { Pelis, setFiltrar, pagina, setPagina, totalPaginas } = PelisApi();

  const AnteriorPagina = () => {
    if (pagina > 1) {
      setPagina(pagina - 1);
    }
  };

  const ProximaPagina = () => {
    if (pagina < totalPaginas) {
      setPagina(pagina + 1);
    }
  };

  const handleSearch = () => {
    setFiltrar(buscarPeli);
    setPagina(1);
  };

  return (
    <>
      <div className="flex justify-center">
        <Input
          className="lg:w-[500px] md:w-[400px] w-[180px] sm:h-8 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 -translate-y-14 ml-2"
          placeholder="Buscar Película"
          type="text"
          value={buscarPeli}
          onChange={(e) => setBuscarPeli(e.target.value)}
        />
        <button
          className="bg-gray-500 pr-2 rounded-md w-15 xl:w-20 h-8 text-white font-bold hover:bg-gray-600 transition duration-300 xl:-translate-y-[56px] xl:translate-x-[6px] md:-translate-y-[55px] md:translate-x-[6px] pl-2 -translate-y-[54px] translate-x-[1px]"
          onClick={handleSearch}
          type="submit"
        >
          Buscar
        </button>
      </div>
      

      {/* Sección películas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-10 px-5">
        {Pelis.length > 0 ? (
          Pelis.map((peli) => (
            <div
              key={peli.id}
              className="bg-black rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="overflow-hidden rounded-t-lg aspect-w-2 aspect-h-3">
                <img
                  src={`https://image.tmdb.org/t/p/w500${peli.poster_path}`}
                  className="w-full h-full object-cover"
                  alt={peli.title}
                />
              </div>
              <div className="p-4">
                <Link
                  to={`/peli/${peli.id}`}
                  target="_blank"
                  className="block text-lg font-semibold text-white hover:text-blue-600 truncate"
                >
                  {peli.title}
                </Link>
                
                <p className="text-white">Fecha de estreno:</p>
                <p className="text-white text-sm mt-1">{peli.release_date}</p>
                
                <div className="flex items-center mt-3">
                  <p className="text-white">Puntuación:</p>
                  <span className="text-white font-bold text-lg">
                    {parseFloat(peli.vote_average).toFixed(1)}
                  </span>
                  
                  <svg
                    className="ml-1 w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.75l-6.6 3.65 1.4-7.1L2 9.5l7.1-1L12 2.5l2.9 6 7.1 1-4.8 4.8 1.4 7.1z" />
                  </svg>
                </div>
              </div>
            </div>
          ))
        ) : (
  
          <div className="col-span-full flex justify-center items-center h-40">
            <p className="text-gray-500 text-lg">No se encontraron películas con ese nombre</p>
          </div>
        )}
          </div>

     
      <div className="flex justify-center items-center bg-black py-4 mt-10">
        
        <button
          className={`text-white px-4 py-2 rounded-md font-semibold ${
            pagina === 1 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:bg-gray-700'
          }`}
          onClick={AnteriorPagina}
          disabled={pagina === 1}
        >
          Página Anterior
        </button>
        

        <p className="text-white mx-5">
          Página: {pagina} / {totalPaginas}
        </p>
        

        <button
          className={`text-white px-4 py-2 rounded-md font-semibold ${
            pagina === totalPaginas
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-gray-700'
          }`}
          onClick={ProximaPagina}
          disabled={pagina === totalPaginas}
        >
          Página Siguiente
        </button>
      </div>
    </>
  );
}

export default Peliculas;
