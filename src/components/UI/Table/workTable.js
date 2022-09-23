import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#212529", color: theme.palette.common.white,
    }, [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    }, // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,

    },
}));

export default function WorkTable(props) {

    return (<TableContainer component={Paper} style={{borderRadius: 0}}>
        <Table sx={{minWidth: 400}} aria-label="customized table">
            <TableHead>
                <TableRow >
                    <StyledTableCell>Послуга</StyledTableCell>
                    <StyledTableCell align="right">Ціна, грн.</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.rows.map((row) => (<StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                        {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.price}</StyledTableCell>
                </StyledTableRow>))}
            </TableBody>
        </Table>
    </TableContainer>);
}

