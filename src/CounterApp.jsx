//Para crear un nuevo Functional Component, hacer: rafc -> tab
import { useState } from 'react'
import PropTypes from 'prop-types'


export const CounterApp = ( { value } ) => {
    const [counter, setCounter] = useState ( value );

    const clicAdd = () => {
        console.log('+1')
        //setCounter (counter + 1);
        setCounter( (c) => c + 1)
    }

    const clicSub = () => {
        console.log('-1')        
        setCounter( (c) => c - 1)
    }

    const clicReset = () => {
        console.log('Reset')        
        setCounter( value)
    }

    return (
        <>
        <h1>Counter App</h1>
        <h2> { counter } </h2>
        <button onClick= { clicAdd } > + 1 </button>
        <button onClick= { clicSub } > - 1 </button>
        <button onClick= { clicReset } > Reset </button>        
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

