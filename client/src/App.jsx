import { Routes, Route } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Dashboard from './pages/DashBoard';
import CitiesPage from './pages/CitiesPage';
import CustomerDetails from './pages/CustomerDetails';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customer/:id" element={<CustomerDetails />} />
        <Route path="/cities" element={<CitiesPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;