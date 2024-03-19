
import { Outlet } from 'react-router-dom'
import './App.css'
import CustomNavbar from './components/CustomNavbar'




function App() {
  

  return (
    <>
    <CustomNavbar/>
    <Outlet/>
    </>
  )
}

export default App
