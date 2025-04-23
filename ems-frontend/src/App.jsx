
import './App.css'
import ListEmployeeComponents from './components/ListEmployeeComponents'
import HelloWorld from './HelloWorld'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* //http://localhost:3500 */}
          <Route path='/' element={<ListEmployeeComponents />}></Route>
          {/* // http://localhost:3500/api/employee/allEmployees */}
          <Route path='/allEmployees' element={<ListEmployeeComponents />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
