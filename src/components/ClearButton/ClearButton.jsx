import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {reset} from "../../features/post/postSlice";

const ClearButton = () => {
    const dispatch = useDispatch();
    const post = useSelector(state=> state.post.item);
  return (
    <>
    {post.length !== 0 &&  <button className='reset_btn' type='button' onClick={() => dispatch(reset())}>Clear</button>}

    </>
  )
}

export default ClearButton
