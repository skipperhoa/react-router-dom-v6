import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Admin from './components/Admin';
import AuthProvider from './components/AuthProvider';

import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Navigation from './components/Navigation';
import NoMatch from './components/NoMatch';
import ProtectedRoute from './components/ProtectedRoute';


const App = () => {
  return (
    <>
      <AuthProvider>
        <h1>React Router</h1>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </>
  );
};


export default App;