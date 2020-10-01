import React, {useState} from 'react';

const Pagination=({getPageNumber})=>{
  const [page, setPage] = useState(1);
  const onChange=(pn)=>{
    setPage(pn)
    getPageNumber(pn)
  }
    return(
        <div className="header">
          <section className="section-2 container-fluid p-0">
            <div className="container">
              <div className="row">
                {/* <button
                  id="btn"
                  type="button"
                  className="mt-3 mx-auto btn btn-dark btn-custom px-5 py-1"
                >
                  Get Photos
                  <nav aria-label="Page navigation">
                    <ul className="pagination">
                      <li className="page-item">
                        <i
                          id="prev"
                          className="fas fa-angle-double-left fa-4x cvr-cst"
                        ></i>
                      </li>
                      <li className="page-item">
                        <a className="page-link apg-custom apg-m" id="middle" href="#btn">
                          Reset | 1 - 10
                        </a>
                      </li>
                      <li className="page-item">
                        <i
                          id="next"
                          className="fas fa-angle-double-right fa-4x cvr-cst"
                        ></i>
                      </li>
                    </ul>
                  </nav>
                </button> */}
                <button
                  id="btn1"
                  type="button"
                  className="mt-3 mx-auto btn btn-dark btn-custom px-5 py-1"
                >
                  Get Albums
                  <nav aria-label="Page navigation">
                    <ul className="pagination">
                      <li className="page-item">
                        <i
                          id="prev1"
                          className="fas fa-angle-double-left fa-4x cvr-cst"
                          onClick={ () => page > 1 ? onChange(page-1) : 1}
                        ></i>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link apg-custom apg-m"
                          id="middle1"
                          href="#btn"
                          onClick={() => onChange(1)}
                        >
                          Reset | {page*10-9} - {page*10}
                        </a>
                      </li>
                      <li className="page-item">
                        <i
                          id="next1"
                          className="fas fa-angle-double-right fa-4x cvr-cst"
                          onClick={ () => page < 10 ? onChange(page+1) : 50}
                          // onClick={ () => page < 50 ? setPage(page+1) : 50}

                        ></i>
                      </li>
                    </ul>
                  </nav>
                </button>
              </div>
              {/* <div className="row justify-content-center" id="cardDiv"></div>
              <div className="row justify-content-center" id="cardDiv1"></div> */}
            </div>
          </section>
        </div>
    )
};

export default Pagination;