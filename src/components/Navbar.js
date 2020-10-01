import React,{useEffect,useRef} from 'react';

const Navbar=()=>{
    const refNavbar = useRef();
   
    useEffect(() => {
        const { current } = refNavbar;

        window.addEventListener('scroll',makeSticky)
        const sticky = current.offsetTop+10;

        function makeSticky() {
          if (window.pageYOffset >= sticky) {
              current.classList.add("sticky")
          } else {
              current.classList.remove("sticky");
          }
      }
      },[])

    return(
        <div className='header'>
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg" ref={refNavbar}>
                <a className="navbar-brand" href="#navbarNav">
                    <i className="fab fa-quinscape fa-2x mx-3"></i>
                    DevCapital</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-align-right text-light"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {/* <!-- to push the links towards left--> */}
                    <div className="mr-auto"></div>
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#home"
                        >HOME
                        <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#course">COURSES</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                        className="nav-link dropdown-toggle"
                        href="#navbarNav"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                        PAGES
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#navbarNav">Generic</a>
                        <a className="dropdown-item" href="#navbarNav">Element</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#navbarNav">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#test">FACT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about-us">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a
                        className="nav-link"
                        href="#ModalLoginForm"
                        data-toggle="modal"
                        data-target="#ModalLoginForm"
                        >LOGIN/REGISTER</a>
                    </li>
                    </ul>
                </div>
                </nav>
                {/* <!-- navbar end --> */}
            </div>
        </div>
    )
};

export default Navbar;