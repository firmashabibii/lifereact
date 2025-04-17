import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './Component/LoginForm';
import Register from './Component/Register';
import CategoryPage from './Component/CategoryPage';
import MainLayout from './Component/MainLayout';
import Home from './Component/Home';
import GoalsPage from './Component/GoalsPage';

const App = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const isAuthenticated = !!user;


  return (
    <Router>
      <Routes>
        {/* Route untuk login dan register */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />

        {/* Kalau belum login, redirect ke /login */}
        {!isAuthenticated && (
          <>
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}

        {/* Kalau sudah login */}
        {isAuthenticated && (
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/goals" element={<GoalsPage />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
};

export default App;

