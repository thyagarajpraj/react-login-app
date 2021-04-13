import React, { Component } from 'react';
import './Login.css';
import Card from '../components/UI/Card'
import Logo from '../../src/assets/images/word-facebook-icon.webp';
import * as actions from '../store/actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { NavLink } from 'react-bootstrap';

class Login extends Component {
    state = {
        authForm: {
            email: {
                elementtype: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Name',
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementtype: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignUp: false,
        errMessage: null,
        forgotPassword: false,
        passwordResetEmail: ''
    }

    onChangedHandler = (event, id) => {
        const updatedAuthForm = { ...this.state.authForm };
        const updatedFormElement = { ...updatedAuthForm[id] };
        updatedFormElement.value = event.target.value;
        updatedAuthForm[id] = updatedFormElement;
        this.setState({ authForm: updatedAuthForm });
    };

    onSubmitHandler = (event) => {
        event.preventDefault();

        this.setState({ errMessage: this.props.errMessage });
        let isSignUp = this.state.isSignUp;
        if (this.state.authForm.email.value === '' || this.state.authForm.password.value === '') {
            this.setState({
                ...this.state,
                errMessage: "Email or Password is Empty"
            });
        } else
            this.props.onAuth(this.state.authForm.email.value, this.state.authForm.password.value, isSignUp);
    };

    changeMode = () => {
        this.setState(
            {
                ...this.state,
                isSignUp: !this.state.isSignUp
            }
        )
    };

    onCancelErr = () => {
        this.setState({ errMessage: null })
    };

    forgotPassword = () => {
        this.setState({ forgotPassword: true });
    };

    onCancelPasswordReset = () => {
        this.setState({ forgotPassword: false });
    };

    onSubmitPasswordReset = () => {
        setTimeout(() => {
            this.setState({ errMessage: "Password reset email has been sent to " + this.state.passwordResetEmail + " Please check your Email!!" })
            this.setState({ forgotPassword: false });
            this.setState({ passwordResetEmail: '' });
        }, 3000);
    };

    onChangePasswordReset = (e) => {
        this.setState({ passwordResetEmail: e.target.value });
    }

    render() {
        const formElementsArray = [];
        for (const key in this.state.authForm) {
            formElementsArray.push({
                id: key,
                config: this.state.authForm[key]
            })
        }

        const form = formElementsArray.map(el => {
            return <input
                id={el.id}
                key={el.id}
                {...el.config.elementConfig}
                value={el.config.value}
                onChange={(e) => this.onChangedHandler(e, el.id)}
                className="fadeIn second"
            />
        });

        let authRedirect = null;
        if (this.props.authRedirectPath) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        let errMessage = this.state.errMessage;
        let formElement = <div>
            <form onSubmit={(e) => this.onSubmitHandler(e)}>
                {form}
                {/* <input type="text" id="login" name="login" onChange={(e) => this.onChangedHandler(e)} className="fadeIn second" placeholder="Login" />
                                <input type="password" id="password" name="password" className="fadeIn third" placeholder="Password" /> */}
                <input type="submit" id="submit" name="submit" className="fadeIn fourth" value={this.state.isSignUp ? "Register" : "Login"} />

                <div className="fadeIn fifth">
                    <NavLink to="#" onClick={this.forgotPassword}>Forgot Password?</NavLink>
                </div>
                <br />
            </form>
            <div id="formFooter" className="fadeIn sixth">
                <input type="button" value={this.state.isSignUp ? 'Login' : 'Register'} onClick={() => this.changeMode()} />
            </div>
        </div>
        if (this.state.forgotPassword)
            formElement = <Card >
                <label>Enter Email Id to send Password reset link</label>
                <input type="text" id="passwordReset" className="passwordReset" value={this.state.passwordResetEmail} onChange={this.onChangePasswordReset} placeholder="Enter Email" />
                <span>
                    <button className="forgotPassword btn btn-sm btn-success" onClick={this.onSubmitPasswordReset} >Submit</button>
                    <button className="forgotPassword forgotPasswordCancel btn btn-sm btn-danger" onClick={this.onCancelPasswordReset}  >Cancel</button>
                </span>
            </Card>

        return (
            < div >
                { authRedirect}
                <Card style={{ marginBottom: '1rem' }} >
                    {errMessage &&
                        <div style={{ textAlign: 'center', color: 'red', border: 'red', boxShadow: 'inherit', width: 'auto', padding: '5px 20px' }}>
                            <span>
                                {errMessage}
                            </span>
                            <span className="closeErrMsg" onClick={this.onCancelErr}>
                                X
                            </span>
                        </div>
                    }
                    <div className="wrapper fadeInDown">
                        <div id="formContent">
                            <div className="fadeIn first">
                                <img src={Logo} id="icon" alt="User Icon" />
                            </div>
                            {formElement}
                        </div>
                    </div>
                </Card>
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        authRedirectPath: state.auth.authRedirectPath,
        errMessage: state.auth.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);