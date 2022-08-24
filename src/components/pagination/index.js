import React, { useEffect } from "react";
import PropTypes from "prop-types";

const PaginationComponent = ({
    itemsCount,
    itemsPerPage,
    currentPage,
    setCurrentPage,
    alwaysShown = true
}) => {
    const pagesCount = Math.ceil(itemsCount / itemsPerPage);
    const isPaginationShown = alwaysShown ? true : pagesCount > 1;
    const isCurrentPageFirst = currentPage === 1;
    const isCurrentPageLast = currentPage === pagesCount;

    const changePage = number => {
        if (currentPage === number) return;
        setCurrentPage(number);
    };

    const onPageNumberClick = pageNumber => {
        changePage(pageNumber);
    };

    const onPreviousPageClick = () => {
        if(!isCurrentPageFirst){
            changePage(currentPage => currentPage - 1);
        }
     
    };

    const onNextPageClick = () => {
        
        if(!isCurrentPageLast){
        changePage(currentPage => currentPage + 1);
        }
    };

    const setLastPageAsCurrent = () => {
        if (currentPage > pagesCount) {
            setCurrentPage(pagesCount);
        }
    };

    let isPageNumberOutOfRange;

    const pageNumbers = [...new Array(pagesCount)].map((_, index) => {
        const pageNumber = index + 1;
        const isPageNumberFirst = pageNumber === 1;
        const isPageNumberLast = pageNumber === pagesCount;
        const isCurrentPageWithinTwoPageNumbers =
            Math.abs(pageNumber - currentPage) <= 2;
        if (
            isPageNumberFirst ||
            isPageNumberLast ||
            isCurrentPageWithinTwoPageNumbers
        ) {
            isPageNumberOutOfRange = false;
            return (
                <li  key={pageNumber} className={`page-item ${pageNumber === currentPage?'active':''}`} 
                aria-current="page"  onClick={() => onPageNumberClick(pageNumber)}>
                    <a className="page-link" href="#">{`${pageNumber}`}</a>
                </li>
            );
        }

        if (!isPageNumberOutOfRange) {
            isPageNumberOutOfRange = true;
           return  <li className="page-item" key={pageNumber}><a className="page-link" href="#">...</a></li>
        }

        return null;
    });

    useEffect(setLastPageAsCurrent, [pagesCount]);

    return (
        <>
            {isPaginationShown && (
                <div className='container-fluid d-flex justify-content-center mt-4'>
                    <nav aria-label="...">
                        <ul className="pagination">
                            <li className={`page-item ${isCurrentPageFirst && 'disabled'}`} onClick={onPreviousPageClick}>
                                <a className="page-link" href="#"  aria-disabled={"true"}>Previous</a>
                            </li>
                            {pageNumbers}
                            <li className={`page-item ${isCurrentPageLast && 'disabled'}`} onClick={onNextPageClick}>
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    );
};

PaginationComponent.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
    alwaysShown: PropTypes.bool
};

export default PaginationComponent;
