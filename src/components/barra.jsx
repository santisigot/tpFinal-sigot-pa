import { Link } from 'react-router-dom';
import { RiNetflixFill } from "react-icons/ri";
import '../index.css';

function Navbar() {
    const logotmdb = '/assets/logotmdb.svg';
    return (
        <>
            <header className="bg-black text-white w-full shadow-md">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2">
                        <RiNetflixFill className="text-red-500 text-2xl" />
                        <span className="font-bold text-xl">netflix nt</span>
                    </Link>
                    <img 
                        className="w-12 h-12" 
                        src={logotmdb} 
                        alt="TMDB"
                    />
                </div>
            </header>
        </>
    );
}

export default Navbar;
