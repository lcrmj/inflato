import React, {useState} from 'react';
import store from './redux/';
import './App.css';
import {Provider} from "react-redux";
import {createMuiTheme, makeStyles, Typography} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";
import ListaIndices from "./components/ListaIndices";
import FiltroIndices from "./components/FiltroIndices";
import { ThemeProvider } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid";
import ValorCestaBasica from "./components/ValorCestaBasica";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FiltroCestaBasica from "./components/FiltroCestaBasica";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    },
    appBarSpacer: {
        ...theme.mixins.toolbar,
    },
    content: {
        marginTop: theme.spacing(2),
        flexGrow: 1,
    },
    layout: {
        width: '100vw',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing(2)
    },
    footer: {
        padding: theme.spacing(2),
        marginTop: 'auto',
        backgroundColor: theme.palette.grey["900"],
    }
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#006B64',
        },
        secondary: {
            main: '#80cbc4'
        }
    }
});

function App() {

    const classes = useStyles();
    const [tabValue, setTabValue] = useState(0);


    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <div className={classes.root}>
                    <AppBar position={"absolute"}>
                        <Toolbar>
                            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                                Inflato - UNIFESO
                            </Typography>
                        </Toolbar>
                        <Tabs value={tabValue} onChange={(_, newValue) => setTabValue(newValue)}>
                            <Tab label={"IPC"}/>
                            <Tab label={"Cesta Básica"}/>
                        </Tabs>
                    </AppBar>
                    <main className={classes.layout}>
                        <div className={classes.appBarSpacer}/>
                        <div className={classes.appBarSpacer}/>
                        <Container maxWidth={"lg"} className={classes.content}>
                            {tabValue === 0 && <div><FiltroIndices/><ListaIndices/></div>}
                            {tabValue === 1 && <div><FiltroCestaBasica/><ValorCestaBasica/></div>}
                        </Container>
                    </main>
                    <footer className={classes.footer}>
                        <Container>
                            <Grid container alignItems={"center"} direction={"column"}>
                                <Grid item>
                                    <img src={"http://www.unifeso.edu.br/images/logo/UNIFESO-BRANCO.png"} height={60} alt={"Logo da UNIFESO"}/>
                                </Grid>
                            </Grid>
                        </Container>
                    </footer>
                </div>
            </ThemeProvider>
        </Provider>
  );
}

export default App;
