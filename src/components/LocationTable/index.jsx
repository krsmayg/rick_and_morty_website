import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Pagination from "@material-ui/lab/Pagination";
import TableRow from "@material-ui/core/TableRow";
import FilterListIcon from "@material-ui/icons/FilterList";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import FilterLocations from "../FilterLocations";
const columns = [
  { id: "id", label: "ID", minWidth: 100 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "type", label: "Type", minWidth: 170, align: "right" },
  { id: "dimension", label: "Dimension", minWidth: 170, align: "right" },
];

function createData(id, name, type, dimension) {
  return { id, name, type, dimension };
}

const useStyles = makeStyles({
  root: {
    margin: "20px 0 ",
    width: "100%",
  },
  pagination: {
    display: "flex",
    justifyContent: "flex-end",
    padding: 5,
  },
  container: {
    maxHeight: 540,
  },
  tableCell: {
    fontSize: "14px",
  },
});
function LocationTable (props)  {
  const classes = useStyles();
  const rows =
    props.locations.length > 0
      ? props.locations.map((loc) =>
          createData(loc.id, loc.name, loc.type, loc.dimension)
        )
      : [];
  const tableToolbar = (
    <Toolbar>
      <div style={{ flex: 1 }}>
        <FilterLocations
          {...props}
        />
      </div>
      <Tooltip title="Filter list">
        <IconButton aria-label="filter list">
          <FilterListIcon fontSize="large" />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
  return (
    <Paper className={classes.root}>
      {tableToolbar}
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className={classes.tableCell}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        className={classes.tableCell}
                      >
                        {column.format && typeof value === "number"
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.pagination}>
        <Pagination
          count={props.pages}
          page={props.page}
          onChange={props.handlePageChange}
        />
      </div>
    </Paper>
  );
};

export default LocationTable;
