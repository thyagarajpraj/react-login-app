import React, { Component } from 'react';
import './Login.css';
import Card from '../components/UI/Card'
import Logo from '../../src/assets/images/word-facebook-icon.webp';

class Login extends Component {
    state = {
        authForm: {
            email: {
                elementtype: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Name'
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
        }
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
        console.log(event);
    };

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
            />
        })

        return (
            <div>
                <Card style={{ marginBottom: '1rem' }} >
                    <div className="wrapper fadeInDown">
                        <div id="formContent">
                            <div className="fadeIn first">
                                <img src={Logo} id="icon" alt="User Icon" />
                            </div>
                            <form onSubmit={(e) => this.onSubmitHandler(e)}>
                                {form}
                                {/* <input type="text" id="login" name="login" onChange={(e) => this.onChangedHandler(e)} className="fadeIn second" placeholder="Login" />
                                <input type="password" id="password" name="password" className="fadeIn third" placeholder="Password" /> */}
                                <input type="submit" id="submit" name="submit" className="fadeIn fourth" value="Login" />
                            </form>
                            <div id="formFooter">
                                {/* <a className="underlineHover" href="#">Forgot Password</a> */}
                            </div>

                        </div>
                    </div>
                </Card>
            </div>
        );
    }
}

export default Login;