import React from 'react'


class ExercisesNew extends React.Component{
    /*constructor(props){
        super(props)

        this.handleClick=this.handleClick //se le puede quitar con babel la parte del constructor y funcionara mas simple
    }//se llama Public Class Fils
    handleClick=()=>{
        console.log('Clicked')
    }
    render(){
        return (
            <button onClick={this.handleClick}>
                Send
            </button>
        )
    }
*/ 

handleChange=e=>{
    console.log(`${e.target.name}:${e.target.value}`)

    let partialState
}

render(){
    return(
        <div className='container'>
            <form>
                <div className='form-group'>
                     <input 
                     type="text"
                     className="form-control" 
                     placeholder='title'
                     name='title'
                     onChange={this.handleChange}/>
                </div>
                <div className='form-group'>
                    <input 
                    type="text" 
                    className="form-control"
                     placeholder='descripcion'
                     name='descripcion'
                     onChange={this.handleChange}/>
                </div>
                <div className='form-group'>
                   
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder='img'
                        name='img'
                        onChange={this.handleChange}/>
                </div>
                <div className='form-row'>
                    <div className='col'>
                        <input 
                        type="text" c
                        lassName='form-control'
                         placeholder='leftcolor'
                         name='leftcolor'
                         onChange={this.handleChange}/>
                    </div>
                    <div className='col'>
                         <input 
                         type="text" 
                         Classname="form-control" 
                         placeholder='rightcolor'
                         name='rightcolor'
                         onChange={this.handleChange}/>
                    </div> 
                </div>

                <button type="submit" className='btn byn-primary'>submit</button>
            </form>
            
        </div>
    )
}
}

export default ExercisesNew