
import './App.css'
import EmployeeComponent from './components/EmployeeComponent'
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
          {/* // http://localhost:3500/api/employee/AddNewEmployee */}
          <Route path='/addEmployee' element={<EmployeeComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
