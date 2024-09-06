import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { _store } from "../redux/store";


const MyNav = () => {

    const customPlaylist = useSelector((store: _store) => store.customPlaylist.content);
    const preferiteSongs = useSelector((store: _store) => store.preferiteSongs.content);

    return (
        <nav
            className="navbar navbar-expand-md fixed-left justify-content-between"
            id="sidebar"
        >
            <div className="container flex-column align-items-start">
                <Link className="navbar-brand" to="/">
                    <img
                        src={logo}
                        alt="Spotify Logo"
                        width="131"
                        height="40"
                    />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <ul>
                            <li>
                                <Link
                                    className="nav-item nav-link d-flex align-items-center"
                                    to="/"
                                >
                                    <i className="bi bi-house-door-fill" />
                                    &nbsp; Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="nav-item nav-link d-flex align-items-center"
                                    to="/"
                                >
                                    <i className="bi bi-book-fill" />
                                    &nbsp; Your Library
                                </Link>
                            </li>
                            <li>
                                <SearchBar />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-1 mt-1 border-top border-secondary w-100">
                    {/* 
                        Con l'utilizzo del && comparivano due 0 al posto dei link ¯\_(ツ)_/¯ 
                    */}
                    {
                        customPlaylist.length ? (<div><Link to={'/playlist'} className="text-light text-decoration-none small">Custom Playlist </Link></div>) : ''
                    }
                    {
                        preferiteSongs.length ? (<div><Link to={'/preferite'} className="text-light text-decoration-none small">Preferite Songs </Link></div>) : ''
                    }
                </div>

            </div>
            <div className="nav-btn">
                <button className="btn signup-btn" type="button">Sign Up</button>
                <button className="btn login-btn" type="button">Login</button>
                <Link to='/'>
                    Cookie Policy
                </Link> |
                <Link to='/'>
                    Privacy
                </Link>
            </div>
        </nav>
    );
};

export default MyNav;