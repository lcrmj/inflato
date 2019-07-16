import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Grid} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import brLocale from "date-fns/locale/pt-BR";
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import {useDispatch, useSelector} from "react-redux";
import {applyDateCb, setDateCb} from "../redux/actions";

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


const FiltroCestaBasica = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.cestaBasicaFilter);
    const classes = useStyles();

    function handleDateChange(date) {
        dispatch(setDateCb(date));
    }

    function consultarClickHandler() {
        dispatch(applyDateCb());
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
                            label="Mês/Ano"
                            variant={"inline"}
                            inputVariant={"outlined"}
                            format={"MM/yyyy"}
                            autoOk
                            views={["year", "month"]}
                            value={data.aux}
                            onChange={handleDateChange}
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" className={classes.button} onClick={consultarClickHandler}>
                            Consultar
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </MuiPickersUtilsProvider>
    );
}

export default FiltroCestaBasica;
