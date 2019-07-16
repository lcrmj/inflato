import React from 'react';
import {Paper} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useSelector} from "react-redux";
import {getValorCbByDate} from "../redux/selectors";
import EmptyState from "./EmptyState";

const useStyles = makeStyles(theme => ({
    card: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    button: {
        margin: theme.spacing(2),
        height: '57px'
    }
}));


const ValorCestaBasica = () => {

    const classes = useStyles();
    const valorCestaBasica = useSelector(getValorCbByDate);

    return (
        valorCestaBasica != null ? <Paper className={classes.card}>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(valorCestaBasica.valor)}</Paper> : <EmptyState/>
    );
};

export default ValorCestaBasica;
