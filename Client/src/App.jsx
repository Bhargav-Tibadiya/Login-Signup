import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Users from './Pages/Users';
import CreateUser from './Pages/CreateUser';
import UpdateUser from './Pages/UpdateUser';

function App() {

  return (
    <div className='rootdiv'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}></Route>
          <Route path='/create' element={<CreateUser/>}></Route>
          <Route path='/update' element={<UpdateUser/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
