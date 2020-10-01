import React from "react";

const Footer = () => (
  <div className="footer">
   <div className="container-fluid p-0">
        <div className="row">
          <div className="col-md-5 col-sm-5">
            <h4 className="text-light">About us</h4>
            <p className="text-muted">
              Developer capital is the stock of habits, knowledge, social and
              personality attributes embodied in the ability to perform coding
              so as to deliver business solutions...
            </p>
            <p className="pt-4 text-muted">
              Copyright ©2020 All rights reserved | by
              <span> MYOUR OXYGEN</span>
            </p>
          </div>
          <div className="col-md-5 col-sm-12">
            <h4 className="text-light">Newsletter</h4>
            <p className="text-muted">Stay Updated</p>
            <form className="form-inline">
              <div className="col pl-0">
                <div className="input-group pr-5">
                  <input
                    type="text"
                    className="form-control bg-dark text-white"
                    id="inlineFormInputGroupUsername2"
                    placeholder="Email"
                  />
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-2 col-sm-12">
            <h4 className="text-light">Follow Us</h4>
            <p className="text-muted">Let us be social</p>
            <div className="column text-light">
              <a href="#root"><i className="fab fa-instagram fa-2x"></i></a>
              <a href="#root"> <i className="fab fa-twitter fa-2x"></i></a>
              <a href="#root"><i className="fab fa-youtube fa-2x"></i></a>
            </div>
          </div>
        </div>
      </div>
  </div>
);

export default Footer;
