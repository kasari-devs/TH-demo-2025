
import { useEffect, useState } from 'react';
//import { Auth } from "./auth";
import Signup from './signup';
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { Container } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; 
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import Login from './Login';
//import PrivateRoute from './PrivateRoute';
import Layout from './Layout';
 
// function PrivateRoute({ children }) {
//   const { currentUser } = useAuth();
//   return currentUser?.email ? children : <Navigate to="/login" />;
// }

function RestrictedRoute({ children }) {
  const { currentUser } = useAuth();
  return !currentUser?.email ? children : <Navigate to="/" />;
}

function App() {
  return (
    <div className="App">
      <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: "100vh" }}>
        <div className='w-100' style={{ maxWidth: '600px'}}>
          <Router>
            <AuthProvider>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Dashboard />} />
                  <Route path="/signup" element={<RestrictedRoute><Signup /></RestrictedRoute>} />
                  <Route path="/login" element={<RestrictedRoute><Login /></RestrictedRoute>} />
                </Route>
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </div>
  );
}

export default App;
