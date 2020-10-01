import React from 'react';

const Sandbox=()=>{
    return(
        <div className="header">
          <section className="section-2 container-fluid p-0">
            <div className="apiCallDemo text-center" id="price">
              <h1>Get whatever data you want from JsonPlaceholder API</h1>
              <p>Posts, comments, albums, photos, todos, users...</p>
              <a
                id="sandbox"
                className="btn btn-dark btn-custom px-5 py-2"
                data-toggle="collapse"
                href="#cardsShow"
                aria-expanded="false"
                aria-controls="cardsShow"
                >API SandBox ~ Try it ~ Show/Hide</a
              >
              <div className="collapse multi-collapse show" id="cardsShow">
                {/* <!-- embedded iframe with API call code from trinket.io --> */}
                <iframe
                  src="https://trinket.io/embed/python3/6f04b51010"
                  title="python"
                  width="100%"
                  height="356"
                  frameBorder="0"
                  marginWidth="0"
                  marginHeight="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>
        </div>
    )
};

export default Sandbox;