import React from "react";
import { useTable } from "react-table";
import styled from 'styled-components'

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
  });

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
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
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
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
            </TableRow>
            );
        })}
        </tbody>
    </TableWrapper>
  )
}

const TableWrapper = styled.table`
  border-collapse: collapse;
  color: white;
  width: 960px;
  border-radius: 8px 8px 0 0;
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
  height: 70px;
  border-bottom: 1px solid #E6E8EC;
`

const TableHead = styled.thead`
  ${TableHeaderRow} th:first-of-type {
    padding-left: 24px;
    width: 0;
  }
`