import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPostById } from '../../features/post/PostOperation';


const Form = () => {
const dispatch = useDispatch();
const [query, setQuery] = useState("");


const handleInputChange = event => {
    setQuery(event.target.value)
}

const onSubmit = event => {
    event.preventDefault();
    dispatch(fetchPostById(query));
    setQuery("");
}

  return (
  <>
    <form className="form" onSubmit={onSubmit}>
        <div className='contain'>
           <label className='form_label'>
        https://jsonplaceholder.typicode.com/posts/ 
        </label>    
        <input
          className="form_input"
          type="number"
          name='query'
          value={query}
          required
          placeholder="Enter id post"
          onChange={handleInputChange}
        /> 
        </div>
        <button className="form__btn" type="submit">Get Info</button>
      </form>
    </>
  )
}

export default Form
