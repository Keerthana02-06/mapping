import React from 'react'
import './planetStyles.css'

function PlanetList() {
    const names=['Mars','Venus','Jupiter','Earth','Saturn','Neptune']
    const planetList=names.map(name => <ul> {name} </ul>)
    return( <div> {planetList} </div>)
}

export default PlanetList