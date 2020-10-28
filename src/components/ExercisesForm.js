import React from 'react'


const ExercisesForm=({ onChange,form,onSubmit })=>(
   
    <div className='container'>
    <form onSubmit={onSubmit}>
        <div className='form-group'>
             <input 
             type="text"
             className="form-control" 
             placeholder='title'
             name='title'
             onChange={onChange}
             value={form.title}/>
        </div>
        <div className='form-group'>
            <input 
            type="text" 
            className="form-control"
             placeholder='descripcion'
             name='description'
             onChange={onChange}
             value={form.description}/>
        </div>
        <div className='form-group'>
           
                <input 
                type="text" 
                className="form-control" 
                placeholder='img'
                name='img'
                onChange={onChange}
                value={form.img}/>
        </div>
        <div className='form-row'>
            <div className='col'>
                <input 
                type="text" c
                lassName='form-control'
                 placeholder='leftcolor'
                 name='leftcolor'
                 onChange={onChange}
                 value={form.leftcolor}/>
            </div>
            <div className='col'>
                 <input 
                 type="text" 
                 Classname="form-control" 
                 placeholder='rightcolor'
                 name='rightcolor'
                 onChange={onChange}
                 value={form.rightcolor}/>
            </div> 
        </div>

        <button type="submit" className='btn byn-primary'>submit</button>
    </form>
    
</div>

)

/*class ExercisesForm extends React.Component{
    
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





render(){
    const{ onChange,form,onSubmit }=this.props
    return(
        <div className='container'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                     <input 
                     type="text"
                     className="form-control" 
                     placeholder='title'
                     name='title'
                     onChange={onChange}
                     value={form.title}/>
                </div>
                <div className='form-group'>
                    <input 
                    type="text" 
                    className="form-control"
                     placeholder='descripcion'
                     name='description'
                     onChange={onChange}
                     value={form.description}/>
                </div>
                <div className='form-group'>
                   
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder='img'
                        name='img'
                        onChange={onChange}
                        value={form.img}/>
                </div>
                <div className='form-row'>
                    <div className='col'>
                        <input 
                        type="text" c
                        lassName='form-control'
                         placeholder='leftcolor'
                         name='leftcolor'
                         onChange={onChange}
                         value={form.leftcolor}/>
                    </div>
                    <div className='col'>
                         <input 
                         type="text" 
                         Classname="form-control" 
                         placeholder='rightcolor'
                         name='rightcolor'
                         onChange={onChange}
                         value={form.rightcolor}/>
                    </div> 
                </div>

                <button type="submit" className='btn byn-primary'>submit</button>
            </form>
            
        </div>
    )
}
}*/ 


export default ExercisesForm