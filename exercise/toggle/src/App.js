import React from 'react'
import Toggle from './Toggle'

const App = () => {
    return (
        <Toggle render={({ isToggled, toggler }) => 
            <div>
                <h1>
                    { isToggled ? "On" : "Off" }
                </h1>
                <button onClick={toggler}>
                    { isToggled ? "Off" : "On" }
                </button>
            </div>
        }/>
    )
}

export default App