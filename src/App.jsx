import { Route, Routes } from 'react-router-dom'
import './App.css'

// pages
import Home from './Pages/Home'

// layouts
import Main from './Layout/Main'


function App() {

  return (
    <>
        
        <Routes>

          <Route element={<Main></Main>}>

                <Route path='/' element={<Home></Home>}></Route>


          </Route>
        

        </Routes>

    </>
  )
}

export default App
