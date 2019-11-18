import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';
import problems from '../mockQuestions';
import { Container } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const columns = [
  { id: 'name', label: 'Nome', minWidth: 170 },
  { id: 'level', label: 'Nível', minWidth: 50 },
];

function createData(name, level,id) {
  return {name, level, id};
}


const rows = 
    problems.map((problem) =>{return createData(problem.title, problem.level, problem._id)})
     

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop:'2%',
    marginBottom: '2%',
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
  input: {
      margin: "5px"
  },
  link:{
      textDecoration: 'none',
      color: blue,
  }
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

 

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
      <div>
    <Paper className={classes.root}>
      <input  className={classes.input} id="txtBusca" placeHolder="Buscar"></input>
      <div className={classes.tableWrapper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody id="tbody">
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    const ide = row.id;
                    const link = "/problem/?id=".concat(ide);
                    if(typeof value == 'string'){
                      return (
                      <TableCell key={column.id} align={column.align}>
                        <Link to={link} className={classes.link}> {column.format && typeof value === 'number' ? column.format(value) : value} </Link>
                      </TableCell>
                      )  
                    }
                    else{
                        return (
                            <TableCell key={column.id} align={column.align}>
                               {column.format && typeof value === 'number' ? column.format(value) : value}
                            </TableCell>
                            ) 
                    }
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'previous page',
        }}
        nextIconButtonProps={{
          'aria-label': 'next page',
        }}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}