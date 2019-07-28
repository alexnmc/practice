import React from 'react'
import { withPharma } from './PharmaProvider'





const PharmaLogin = props=>  {
    
        return (
            
            <div className="admin">
                <div className = "loginContainer">
                { props.toggle ?
                            <div  className='loginForm'>
                                <h4>Intrare in cont:</h4>
                                <input
                                    className = "login1"
                                    type='text'
                                    name='username'
                                    placeholder='Adresa e-mal'
                                    value={props.username}
                                    onChange={props.handleChange}
                                />

                                <input
                                    className = "login1"   
                                    type='text'
                                    name='password'
                                    placeholder='Parola'
                                    value={props.password}
                                    onChange={props.handleChange}
                                />
                                <button className = 'loginButton' onClick={props.handleLogin}>Login</button>
                                <button className='loginButton2' onClick={props.editToggler}>Sign up</button>
                            </div>
                            
                   
                        
                    :     

                  
                        <div className='loginForm'>
                        <h4> înregistrare farmacii:</h4>
                       
                            <input
                                className = "login1"
                                type='text'
                                name='pharmaCode'
                                placeholder='cod'
                                value={props.pharmaCode}
                                onChange={props.handleChange}
                            />

                            <input
                                className = "login1"
                                type='text'
                                name='username'
                                placeholder='Adresa e-mail'
                                value={props.username}
                                onChange={props.handleChange}
                            />

                            <input
                                className = "login1"
                                type='text'
                                name='password'
                                placeholder='alege parola'
                                value={props.password}
                                onChange={props.handleChange}
                            />

                            <input
                                className = "login1"
                                type='text'
                                name='password2'
                                placeholder='repeta parola'
                                value={props.password2}
                                onChange={props.handleChange}
                            />
                            <button className = 'loginButton'  onClick={props.handleSignup} >Sign up</button>
                            <button className = 'loginButton2' onClick={props.editToggler}>Return</button>
                    </div>
                }
                </div>
            </div>
                
           
        )
    
}

export default withPharma(PharmaLogin)
