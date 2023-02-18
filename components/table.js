import React from "react";
import { useSortBy, useTable } from "react-table";
import styled from 'styled-components'
import { ArrowDownIcon, ArrowUpIcon} from '@heroicons/react/24/solid'

export default function Table({ columns, data }) {
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data
  },
  useSortBy
  );

  /*
    Render the UI for your table
    - react-table doesn't have UI, it's headless. We just need to put
    the react-table props from the Hooks, and it will do its magic automatically\
  */

  return(
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
        {rows.map((row, i) => {
            prepareRow(row);
            return (
            <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => {
                  
                return <Cell {...cell.getCellProps()}>{cell.column.indexed ? <RowNumber>{i + 1}</RowNumber> : cell.render('Cell')}</Cell>;
                })}
            </TableRow>
            );
        })}
        </tbody>
    </TableWrapper>
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

const TableWrapper = styled.table`
  font-size: 14px;
  border-collapse: collapse;
  color: white;
  width: 100%;
  min-width: 700px;
  border-radius: 8px 8px 8px 8px;
  overflow: hidden;
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
  ${TableHeaderRow} th:first-of-type {
    padding-left: 24px;
    width: 0;
  }
`

const TableHeader = styled.th`
  border: 1px solid #F9FAFB;
  border-bottom: 1px solid #E6E8EC;
  line-height: 30px;
`

const Cell = styled.td`
  border: 1px solid white;
  border-bottom: 1px solid #E6E8EC;
`

const RowNumber = styled.div`
    margin: 0 24px;
`