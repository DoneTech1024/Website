
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
function Header() {
  return (
<BrowserRouter >
    <div className="container-fluid">
        <div className="row ">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary bar shadow fixed-top">

                <div className="navbar-brand">
                    <h4 className="text-white">DONETECH</h4>
                </div>
                <button className="navbar-toggler" data-bs-toggle="collapse" type="button" data-bs-target="#navbarcontent" >
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarcontent" >
                    <ul className="navbar-nav">
                        <li className="nav-item">

                            <Link to="/" className="nav-link text-white">HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link text-white">
                                ABOUT US
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/services" className="nav-link text-white dropdown-toggle" data-bs-toggle="dropdown" data-bs-target="#dropdownitem" >
                                SERVICE
                            </Link>
                            <ul className="dropdown-menu" id="dropdownitem">
                                <li>
                                    <a href="" className="dropdown-item">web development</a>
                                </li>
                                <li>

                                </li>
                                <li>
                                    <a href="" className="dropdown-item"> App development</a>
                                </li>
                                <li>
                                    <a href="" className="dropdown-item">digital makerting </a>
                                </li>
                                <li>
                                    <a href="" className="dropdown-item">graphic design</a>
                                </li>

                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link text-white"> FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link text-white">
                                PORTFOLIO
                            </a>
                        </li>
                        <li className="nav-item">
                            contact
                            <button className="rounded-pill d-lg-inline border-primary d-md-none" >+254710383551</button>
                        </li>

                    </ul>
                </div>
        </nav>
        </div>
    </div>
    <br/>
    <br/>
    <br/>
    <Switch>
    <Route path ='/' component={Home} exact/>
    <Route path ='/about' component={About}/>
    <Route path ='/services' component={Services}/>
    </Switch>
</BrowserRouter>
  );
}

export default Header;
