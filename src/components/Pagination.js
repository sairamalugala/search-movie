import React from 'react';

const Pagination = ({ movieName, currentPage, maxPageCount,onPaginationClick }) => {
    if (!movieName) {
        return '';
    }
    /*let list = [];
    for (let i = 1; i <= maxPageCount; i++) {
        list.push(<li className="page-item" key={i} onClick={()=>{
            onPaginationClick(i);
        }}><a className="page-link" href="#" tabIndex="-1">{i}</a></li>)
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item disabled" style={{display:'none'}}>
                    <a className="page-link" href="#" tabIndex="-1">&laquo;</a>
                </li>
                {
                    list
                }
                <li className="page-item" style={{display:'none'}}>
                    <a className="page-link" href='#'>&raquo;</a>
                </li>
            </ul>
        </nav>
    )*/
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={currentPage==1 ? "page-item disabled" : "page-item" } onClick={()=>{
                    onPaginationClick("prev");
                }}>
                    <a className="page-link" href="#" tabIndex="-1">&laquo;</a>
                </li>
                <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex="-1">{currentPage}</a>
                </li>
                <li className={maxPageCount==currentPage ? "page-item disabled" : "page-item" } onClick={()=>{
                    onPaginationClick("next");
                }}>
                    <a className="page-link" href='#'>&raquo;</a>
                </li>
            </ul>
        </nav>
    )

}

export default Pagination;