import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import Payment from './Pages/Dashboard/Payment/Payment';
import Footer from './Pages/Shared/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
              <Route path="/appointment" element={<PrivateRoute>
                <Appointment />
              </PrivateRoute>} />
                
              <Route path="/dashboard" element={<PrivateRoute>
                <Dashboard />
              </PrivateRoute>}>
                
              <Route path="/dashboard" element={<DashboardHome></DashboardHome>} />
                
              <Route path={`/dashboard/payment/:appointmentId`} element={<Payment></Payment>} />
                  
              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>} />
                  
              <Route path={`/dashboard/addDoctor`} element={<AdminRoute><AddDoctor></AddDoctor></AdminRoute>} />
              </Route>
                
              <Route path="/" element={<Home />} />

              <Route path="/home" element={<Home />} />
                
              <Route path="/login" element={<Login />} />
                
              <Route path="/register" element={<Register />} />
              
            </Routes>
            <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
