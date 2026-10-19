
import {Routes, Route } from 'react-router'
import Home from './pages/Home.jsx'
import CreateNewPost from './pages/CreateNewPost.jsx'
import './App.css'

function App() {
 

  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-new-post" element={<CreateNewPost />} />
        </Routes>
    </>
  )
}

export default App
