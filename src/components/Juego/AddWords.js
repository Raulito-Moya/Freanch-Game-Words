import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

import { useDispatch, useSelector } from 'react-redux'
import { getFetchWords, updateFetchWords } from '../../actions/words'
import { useForm } from '../../Hooks/useForm'



export const AddWords = () => {
       
      const dispatch = useDispatch();
      const {words} = useSelector(state => state.words)
     const[ {wordsWriten}, handleInputChange ] = useForm({
       wordsWriten: ''
     })
    
    const [ path, setPath ] = useState('popularWords')
    const [ send, setSend ] = useState(false)

     useEffect(()=> {
      
       dispatch(getFetchWords())

     },[send])

    const handleValue = (e) => {
       
        setPath(e.target.value)
    }
     console.log(path);  
 

     
    const handleSend = (e) => {
       e.preventDefault()
    

       if( !wordsWriten.includes(",") ){
         Swal.fire({
          icon: 'error',
          title: 'Opss',
          text: 'Please write commas ( , )'
         })
        console.log('no hay comas'); //aqui voya a mostrar una alerte con SweetAlert
      }else{
        Swal.fire({
          title: 'Hi Raul :). Do you want to save these words?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: `Save`,
          denyButtonText: `Don't save`,
        }).then( (result) => {
           if (result.isConfirmed) {
             
             dispatch(updateFetchWords(path, wordsWriten))
             setSend(true)
             Swal.fire('Saved! ', '', 'success')

          } else if (result.isDenied) {
            Swal.fire('OK ... continue', '', 'info')
          }
        })
        
      }

    }

     

  return(
  
    <div>
      <form onSubmit={handleSend}>
        <select 
          name="path"  
          class="form-select" 
          aria-label="Default select example" 
          onChange={handleValue} 
          >
          <option  name="path" selected> popularWords </option>
          <option name="path" > usefulAdjectives </option>
          <option name="path" > usefulNouns </option>
          <option name="path" > verbsGroupE </option>
          <option name="path" > verbsGroupI </option>
        </select>
          <input 
           type="text" 
           name="wordsWriten" 
           value={wordsWriten}
           onChange={ handleInputChange }
           placeholder="words"
           />
          <button type="submit" >Send</button>
      </form>      
    </div>

  )

}