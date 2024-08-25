
import './App.css'
import QueryForm from './components/QueryForm/QueryForm'
import PostList from "./components/PostList/PostList"
import ClearButton from "./components/ClearButton/ClearButton"
import Title from "./components/Title/Title"

function App() {


  return (
  
      <div className='app'>
        <Title/>
    <QueryForm/>
    <PostList/>
    <ClearButton/>
      </div>

  )
}

export default App
