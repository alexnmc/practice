import React from 'react'
import { withTheme } from './ThemeProvider'


const About = props => {
    return (
        <div className={`${props.theme}-about`}>
            <h1>About to change theme...</h1>
            <button onClick={props.toggleTheme}>
                {props.theme === "dark" ? "Switch to Pink" : "Switch to Dark-Blue"}
            </button>
        </div>
    )
}

export default withTheme(About)