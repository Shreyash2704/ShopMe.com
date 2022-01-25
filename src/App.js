import './App.css';
import Navbar from './components/pages/Navbar';
import Content from './components/pages/Products/content';
import AddProduct from './components/pages/addProducts/AddProduct';
import {BrowserRouter as Router,Route,Link, Routes,Navigate} from 'react-router-dom'
import Dashboard from './components/pages/dashboard/Dashboard';
import Details from './components/pages/Products/Details';
import Signup from './components/signup_login/signup';
import Login from './components/signup_login/login';
import Logout from './components/signup_login/logout';
import Admin_Auth from './components/signup_login/Admin_Auth';
import Admin_login from './components/signup_login/Admin/Admin_login'
import Admin_signup from './components/signup_login/Admin/Admin_signup'
import AddCart from './components/pages/addCart/AddCart';
import Home from './components/pages/HomePage/Home';
import About from './components/pages/about/About';
function App() {
  return (
    <div className="container-fluid  App">
      <Router>
      <Routes>
         
          <Route exact path="/admin/addProduct" element={localStorage.getItem("token")!== null ?
                 ( localStorage.getItem('admin') === "true" ? (<AddProduct />) : (<Navigate to="/admin" />))
                 :
                 (<Navigate to="/" />)}
          />
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/Product" element={<Content />}/>
          <Route exact path="/dashboard" element={localStorage.getItem("token")!== null ?(<Dashboard />):(<Login />)}/>
          <Route exact path="/details/:id" element={<Details />} />
          <Route exact path="/Product" element={<Content />}/>
          <Route exact path="/login" element={localStorage.getItem("token")!== null ?(<Home />):(<Login />) } />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/admin" element={<Admin_Auth />} />
          <Route exact path="/admin_login" element={<Admin_login />} />
          <Route exact path="/admin_signup" element={<Admin_signup />} />
          <Route exact path="/addCart" element={<AddCart />} />
          <Route exact path="/about" element={<About />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
