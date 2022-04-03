import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home'
import Blog from './Components/Blog/Blog'
import Login from './Components/Login/Login'
import Navbar from './Components/Navbar/Navbar';
import BlogDetails from './Components/BlogDetails/BlogDetails';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/blog/:id' element={<BlogDetails></BlogDetails>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
     </Routes>
    </div>
  );
}

export default App;
