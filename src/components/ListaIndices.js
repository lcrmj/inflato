import React from 'react';
import {useSelector} from "react-redux";
import {GridList} from "@material-ui/core";
import GridListTile from "@material-ui/core/GridListTile";
import Card from "@material-ui/core/Card";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import cx from 'classnames';
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {getIndicesByRange} from "../redux/selectors";

const useStyles = makeStyles(theme => ({

}));

const ListaIndices = () => {

    const indices = useSelector(getIndicesByRange);
    const classes = useStyles();

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
