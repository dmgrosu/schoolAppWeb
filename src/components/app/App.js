import React from 'react';
import './App.css';
import SignIn from "../signIn/SignIn";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {createMuiTheme} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import AuthorizedApp from "./AuthorizedApp";

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

const App = (props) => {

    const {token} = props.auth;

    return (
        <ThemeProvider theme={theme}>
            {!token && <SignIn/>}
            {token && <AuthorizedApp/>}
        </ThemeProvider>
    );
};

const mapStateToProps = state => ({
    auth: state.authReducer
});

export default withRouter(connect(mapStateToProps, {

})(App));
