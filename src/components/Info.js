import React from 'react';

const Info=()=>{
    return(
        <div className="header">
          <section className="section-2 container-fluid p-0">
            
            <div className="cover">
              <div className="content text-center">
                <h1>Some Features That Made JsonPlaceholder Unique</h1>
                <p>
                  Fake Online REST API for Testing and Prototyping Serving ~350M
                  requests per month
                </p>
              </div>
            </div>
            <div className="container-fluid text-center">
              <div className="numbers d-flex flex-row flex-wrap justify-content-center">
                <div className="rect">
                  <h1>~350M</h1>
                  <p>requests per month</p>
                </div>
                <div className="rect">
                  <h1>5000</h1>
                  <p>Photos</p>
                </div>
                <div className="rect">
                  <h1>100</h1>
                  <p>Albums</p>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
};

export default Info;