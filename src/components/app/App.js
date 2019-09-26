import React from 'react';
import './App.css';
import SignIn from "../signIn/SignIn";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: "#FF0000",
        },
        background: {
            default: '#fff',
        },
    }
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <SignIn/>
        </ThemeProvider>
    );
}

export default App;
