import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {compose} from "redux";
import withStyles from "@material-ui/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

const styles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class SignIn extends Component {

    state = {
        email: "",
        password: "",
        rememberMe: false
    };

    handleChange = name => event => {
        const newValue = event.target.value;
        this.setState({
            [name]: newValue
        })
    };

    handleRememberCheck = (event) => {
        this.setState({
            rememberMe: event.target.checked
        })
    };

    render() {

        const {email, password, rememberMe} = this.state;
        const {classes} = this.props;

        return (
            <Container component="main" maxWidth="xs">
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={this.handleChange("email")}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={this.handleChange("password")}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value={rememberMe}
                                          color="primary"
                                          onChange={this.handleRememberCheck}
                                />
                            }
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        {/*<Grid container>*/}
                        {/*    <Grid item xs>*/}
                        {/*        <Link href="#" variant="body2">*/}
                        {/*            Forgot password?*/}
                        {/*        </Link>*/}
                        {/*    </Grid>*/}
                        {/*    <Grid item>*/}
                        {/*        <Link href="#" variant="body2">*/}
                        {/*            {"Don't have an account? Sign Up"}*/}
                        {/*        </Link>*/}
                        {/*    </Grid>*/}
                        {/*</Grid>*/}
                    </form>
                </div>
            </Container>
        )
    }
}

export default compose(withStyles(styles))(SignIn);