import React from 'react';
import SandboxImg from '../images/APIPlayground.jpg';

const Header=()=>{
    return(
        <div className="header">
             <div className="container text-center" id="home">
        <div className="row">
          <div className="col-md-7 col-sm-12 text-white">
            <h6>AUTHOR: MYOUR OXYGEN</h6>
            <h1>EXCITING ADVENTURE</h1>
            <p className="text-muted">
              JSONPlaceholder is a free online REST API that you can use
              whenever you need some fake data. It's great for tutorials,
              testing new libraries, sharing code examples, ...
            </p>
            <a href="#sandbox">
              <button className="btn btn-light px-5 py-2 btn-custom">
                Try it here, in our sandbox below! <span role="img" aria-label="below"> ↘️</span>
              </button>
            </a>
          </div>
          <div className="col-md-5 col-sm-12 h-25">
            <img
              className="shadow"
              src={SandboxImg}
              alt="API Sandbox"
            />
          </div>
        </div>
      </div>
        </div>
    )
};

export default Header;