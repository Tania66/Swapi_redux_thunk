import React from 'react'
import { useSelector } from 'react-redux';


 const PostList = () => {
const post = useSelector(state=> state.post.item);
const postJson = JSON.stringify(post, null, 2);


  return (
    <div className='list_container'>
      <pre className='list_pre'>{post.length !== 0 &&  postJson}</pre>
    </div>
  )
}


export default PostList