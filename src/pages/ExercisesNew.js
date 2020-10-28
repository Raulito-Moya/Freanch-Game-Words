import React from 'react'
import ExerciseForm from '../components/ExercisesForm'
import Card from '../components/Card'
import vacio from '../images/vacio.png'

const ExercisesNew=({form,onChange,onSubmit})=>(

    <div className="row">
    <div className="col-sm">
     <Card {...form}
     img={vacio}/> 
    </div>
    <div  className="col-sm">
    <ExerciseForm
       onChange={onChange}
       form={form}
       onSubmit={onSubmit}/>
      
    </div>
</div>
)

export default ExercisesNew