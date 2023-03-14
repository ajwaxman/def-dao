import React from "react";
import styled from "styled-components";

const Paginator = ({gotoPage, canPreviousPage, canNextPage, previousPage, nextPage, pageIndex, pageOptions, pageSize}) => {
    return (
        <>
            <PaginatorOldWrapper>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                {"<<"}
                </button>{" "}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Previous
                </button>{" "}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next
                </button>{" "}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {">>"}
                </button>{" "}
                <span>
                    Page{" "}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{" "}
                </span>
                <span>
                    | Go to page:{" "}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={(e) => {
                        const pageNumber = e.target.value
                            ? Number(e.target.value) - 1
                            : 0;
                        gotoPage(pageNumber);
                        }}
                        style={{ width: "50px" }}
                    />
                </span>{" "}
                <select
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
                >
                {[10, 25, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                    </option>
                ))}
                </select>
            </PaginatorOldWrapper>
            <PaginatorWrapper>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                        Previous
                </button>{" "}
                <Pages>
                    { canPreviousPage && (
                        <Page onClick={() => gotoPage(0)}>{ 1 }</Page>                               
                    )}
                    { pageIndex > 2 && (
                       <Dots>...</Dots>
                    )}
                    { pageIndex >= 2 && (
                        <Page onClick={() => gotoPage(pageIndex - 1 )}>{ pageIndex }</Page>         
                    )}
                    
                    <SelectedPage onClick={() => gotoPage(pageIndex)}>{ pageIndex + 1}</SelectedPage>
                    
                    { pageIndex + 3 <= pageOptions.length && (
                        <Page onClick={() => gotoPage(pageIndex + 1 )}>{ pageIndex + 2 }</Page>         
                    )}


                    { pageIndex < pageOptions.length - 3 &&  (
                        <Dots>...</Dots>
                    )}
                    { canNextPage &&  (
                        <Page onClick={() => gotoPage(pageOptions.length - 1)}>{ pageOptions.length }</Page>
                    )}
                </Pages>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next
                </button>{" "}
            </PaginatorWrapper>
        </>
    )
}

const PaginatorOldWrapper = styled.div`
    width: fit-content;
    margin: 32px auto;
    color: white;
    display: none;
`

const PaginatorWrapper = styled.div`
    display: flex;
    gap: 12px;
    color: white;
    width: fit-content;
    margin: 32px auto;
`

const Pages = styled.div`
    display: flex;
    gap: 2px;
`

const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;;
    padding: 2px 10px;
    background: none;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
        background: rgba(255,255,255, 0.18);
    }
`

const SelectedPage = styled(Page)`
    background: rgba(255,255,255, 0.12);
    border-radius: 4px;
    padding: 2px 10px;
    &:hover {
        background: rgba(255,255,255, 0.10); 
    }
`

const Dots = styled.div`
    width: 24px;
    text-align: center;
`

export default Paginator