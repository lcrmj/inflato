import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {KeyboardDatePicker} from "@material-ui/pickers";
import brLocale from 'date-fns/locale/pt-BR'
import {startOfMonth} from 'date-fns';
import {useDispatch, useSelector} from "react-redux";
import {applyRange, setFilterRange} from "../redux/actions";
import Button from "@material-ui/core/Button";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    card: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    picker: {
        margin: theme.spacing(2)
    },
    button: {
        margin: theme.spacing(2),
        height: '57px'
    }
}));

const FiltroIndices = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.indiceFilter);
    const classes = useStyles();

    function handleInitialDateChange(date) {
        dispatch(setFilterRange(startOfMonth(date), filter.temp.ate));
    }

    function handleFinalDateChange(date) {
        dispatch(setFilterRange(filter.temp.de, date));
    }

    function consultarClickHandler(ev) {
        dispatch(applyRange());
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={brLocale} >
            <Card elevation={1} className={classes.card}>
                <Grid container spacing={2}>
                    <Grid item>
                        <DatePicker
                            className={classes.picker}
                            margin="normal"
                            id="mui-pickers-date"
                            label="De"
                            variant={"inline"}
                            inputVariant={"outlined"}
                            format={"MM/yyyy"}
                            autoOk
                            views={["year", "month"]}
                            value={filter.temp.de}
                            onChange={handleInitialDateChange}
                        />
                    </Grid>
                    <Grid item>
                        <DatePicker
                            className={classes.picker}
                            margin="normal"
                            id="mui-pickers-date"
                            label="Até"
                            variant={"inline"}
                            inputVariant={"outlined"}
                            format={"MM/yyyy"}
                            autoOk
                            views={["year", "month"]}
                            value={filter.temp.ate}
                            onChange={handleFinalDateChange}
                        />
                    </Grid>
                    <Grid item alignContent={"stretch"} alignItems={"str"}>
                        <Button variant="contained" color="primary" className={classes.button} onClick={consultarClickHandler}>
                            Consultar
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </MuiPickersUtilsProvider>
    )
};

export default FiltroIndices;
