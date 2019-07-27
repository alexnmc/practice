import React, { Fragment } from 'react'
import { withPharma } from './PharmaProvider'





const PharmaLogin = props=>  {
    
        return (
            <Fragment>
                <div className="admin">
                { props.toggle ?
                    <div className = "logInA">
                        <div className = 'login2'>
                            <form onSubmit={props.handleLogin} className='loginForm'>
                                <h4>Admin only:</h4>
                                <input
                                    className = "login1"
                                    type='text'
                                    name='username'
                                    placeholder='Username'
                                    value={props.username}
                                    onChange={props.handleChange}
                                />

                                <input
                                    className = "login1"   
                                    type='text'
                                    name='password'
                                    placeholder='Password'
                                    value={props.password}
                                    onChange={props.handleChange}
                                />
                                <button className = 'loginButton'>Login</button>
                            </form>
                            <button className='signupButton2' onClick={props.editToggler}>Sign up</button>
                        </div>
                    </div>
                        
                    :     

                    <div className = "adminContainer">
                        <form onSubmit={props.handleSignup} className='signUpAdmin'>
                        <h4>Sign Up:</h4>
                       
                            <input
                                className = "login1"
                                type='text'
                                name='pharmaCode'
                                placeholder='enter code'
                                value={props.pharmaCode}
                                onChange={props.handleChange}
                            />

                            <input
                                className = "login1"
                                type='text'
                                name='username'
                                placeholder='enter a username'
                                value={props.username}
                                onChange={props.handleChange}
                            />

                            <input
                                className = "login1"
                                type='text'
                                name='password'
                                placeholder='choose your password'
                                value={props.password}
                                onChange={props.handleChange}
                            />

                            <input
                                className = "login1"
                                type='text'
                                name='password2'
                                placeholder='repeat password'
                                value={props.password2}
                                onChange={props.handleChange}
                            />
                            <button className = 'loginButton'>Sign up</button>
                        </form>
                            <button className = 'signupButton2' onClick={props.editToggler}>Return</button>
                    </div>
                }
                </div>
            </Fragment>
        )
    
}

export default withPharma(PharmaLogin)
