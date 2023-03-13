import React from "react";
import { useTable, useFilters, useSortBy, usePagination } from "react-table";
import styled from 'styled-components'
import { ArrowDownIcon, ArrowUpIcon} from '@heroicons/react/24/solid'
import { AvailabilitySelector, LocationSelector, SkillSelector } from "./selectInputs";
import { QUERIES } from "../utils/constants";

export default function Table({ columns, data }) {
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    setFilter,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    // state: {filters},
  } = useTable({
    columns,
    data
  },
  useFilters,
  useSortBy,
  usePagination
  );

  const { pageIndex, pageSize } = state;

  /*
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put
    the react-table props from the Hooks, and it will do its magic automatically\
  */

  console.log("Hello", pageIndex)

  return(
    <>
      <FilterWrapper>
        <LocationSelector setFilter={setFilter} />
        <SkillSelector setFilter={setFilter} />
        <AvailabilitySelector setFilter={setFilter} />
      </FilterWrapper>
      <TableWrapper {...getTableProps()}>
          <TableHead>
          {headerGroups.map(headerGroup => (
              <TableHeaderRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                  <TableHeader {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? <ArrowUpIconWrapper/>
                          : <DownArrowIconWrapper/>
                        :""
                      }
                    </span>
                  </TableHeader>
              ))}
              </TableHeaderRow>
          ))}
          </TableHead>
          <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
              prepareRow(row);
              return (
              <TableRow {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    
                  return <Cell {...cell.getCellProps()}>{cell.column.indexed ? <RowNumber>{(pageIndex) * pageSize + i + 1}</RowNumber> : cell.render('Cell')}</Cell>;
                  })}
              </TableRow>
              );
          })}
          </tbody>
      </TableWrapper>
        <div>
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
        </div>
    </>
  )
}

const iconSize = '18px';
const iconPadding = '6px';

const ArrowUpIconWrapper = styled(ArrowUpIcon)`
  width: ${iconSize};
  height: ${iconSize};
  display: inline;
  margin-left: calc(-${iconSize});
  transform: translateX(${iconSize});
  padding-left: ${iconPadding};
  padding-top: ${iconPadding};
`

const DownArrowIconWrapper = styled(ArrowDownIcon)`
  width: ${iconSize};
  height: ${iconSize};
  display: inline;
  margin-left: calc(-${iconSize});
  transform: translateX(${iconSize});
  padding-left: ${iconPadding};
  padding-top: ${iconPadding};
`

const FilterWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16px;

    select, .select {
      margin-left: 20px;
    }

    select {
        padding: 4px 8px;
    }

    @media ${QUERIES.phoneAndBelow} {
      flex-direction: column;
      select, .select {
        margin: 4px 0;
      }
    }
`


const TableHeaderRow = styled.tr`
  background: #F9FAFB;
  color: #131313;
  height: 42px;
  text-align: left;
`

const TableRow = styled.tr`
  background: white;
  color: #131313;
  height: 64px;
`

const TableHead = styled.thead`
`

const TableHeader = styled.th`
  border: 1px solid #F9FAFB;
  border-bottom: 1px solid #E6E8EC;
  line-height: 30px;
`

const Cell = styled.td`
  border: 1px solid white;
  border-bottom: 1px solid #E6E8EC;
  &:last-child {
    text-align: right;
    width: 160px;
  }
`

const RowNumber = styled.div`
  text-align: center;
  margin: 0 12px;
`

const TableWrapper = styled.table`
  table-layout: auto; 
  border-collapse: collapse;
  width: 100%;    
  font-size: 14px;
  border-collapse: collapse;
  color: white;
  width: 100%;
  min-width: 700px;
  border-radius: 8px 8px 8px 8px;
  overflow: hidden;
  margin-bottom: 32px;

  @media ${QUERIES.tabletAndBelow} {
    min-width: 350px;
  }

  ${TableHeaderRow} th:first-of-type, ${TableRow} td:first-of-type {
    padding-left: 0;
    width: 0;
    @media ${QUERIES.tabletAndBelow} {
      padding-left: 0;
    }
  }
  ${TableHeaderRow} th:nth-of-type(1), ${TableRow} td:nth-of-type(1) {
    width: 0%; // row number
  }
  ${TableHeaderRow} th:nth-of-type(2), ${TableRow} td:nth-of-type(2) {
    width: 18%; // username
    white-space: nowrap;
    @media ${QUERIES.tabletAndBelow} {
      width: 0%;
    }
  }
  ${TableHeaderRow} th:nth-of-type(3), ${TableRow} td:nth-of-type(3) {
    width: 12%; // location
    white-space: nowrap;
    @media ${QUERIES.tabletAndBelow} {
      display: none;
    }
  }
  ${TableHeaderRow} th:nth-of-type(4), ${TableRow} td:nth-of-type(4){
    width: 28%; // Skills
    white-space: nowrap;
    @media ${QUERIES.tabletAndBelow} {
      display: none;
    }
  }
  ${TableHeaderRow} th:nth-of-type(5), ${TableRow} td:nth-of-type(5) {
    width: 15%; // Availability
    @media ${QUERIES.tabletAndBelow} {
      display: none;
    }
  }
  ${TableHeaderRow} th:nth-of-type(6), ${TableRow} td:nth-of-type(6) {
    width: 10%; // joined
    @media ${QUERIES.tabletAndBelow} {
      display: none;
    }
  }
  ${TableHeaderRow} th:nth-of-type(7), ${TableRow} td:nth-of-type(7) {
    width: 17%; // social media
    @media ${QUERIES.tabletAndBelow} {
      width: 70%;
    }
  }
`