import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { ResearchList } from './components/ResearchList';
import { Login } from './components/Login';
import { StaffDirectory } from './components/staff/StaffDirectory';
import AddStaff from './components/staff/AddStaff';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout>
                  <Dashboard>
                    <ResearchList />
                  </Dashboard>
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/staff"
            element={
              <PrivateRoute>
                <Layout>
                  <StaffDirectory />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/AddStaff"
            element={
              <PrivateRoute>
                <Layout>
                  <AddStaff />
                </Layout>
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;