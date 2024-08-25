
import './App.css'
import Form from './components/Form/Form'
import PostList from "./components/PostList/PostList"
import ClearButton from "./components/ClearButton/ClearButton"
import Title from "./components/Title/Title"

function App() {


  return (
  
      <div className='app'>
        <Title/>
    <Form/>
    <PostList/>
    <ClearButton/>
      </div>

  )
}

export default App
