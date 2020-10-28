import React from 'react'

import ExerciseList from '../components/ExercisesList'
import Welcome from '../components/Welcome'
import Button from '../components/Button'

const ExercisesPresentation=({exercises})=>(
     
    <React.Fragment>
    <Welcome username="Raúl"/>
    <ExerciseList exercises={exercises}/>
     <Button/>
    </React.Fragment>
)

export default ExercisesPresentation