import React from "react";
import {Paper} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    card: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    }
}));

const EmptyState = () => {

    const classes = useStyles();

    return (
        <Paper className={classes.card}>
            <Typography align={"center"} variant={"h5"} color={"textSecondary"}>Nenhum dado encontrado, altere sua consulta.</Typography>
        </Paper>
    )
};

export default EmptyState;
