import React from 'react';
import {useSelector} from "react-redux";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {getIndicesByRange} from "../redux/selectors";

const ListaIndices = () => {

    const indices = useSelector(getIndicesByRange);

    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Índice</TableCell>
                        <TableCell>Percentual</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {indices.map(indice => (
                        <TableRow key={indice.id}>
                            <TableCell>{indice.titulo}</TableCell>
                            <TableCell>{parseFloat(indice.percentual).toFixed(2) + '%'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
};

export default ListaIndices;
