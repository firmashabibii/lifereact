import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './Component/MainLayout';
import Home from './Component/Home';
import CategoryPage from './Component/CategoryPage';
import GoalsPage from './Component/GoalsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/goals" element={<GoalsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;