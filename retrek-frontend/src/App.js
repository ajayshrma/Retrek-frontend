import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Routines from './pages/Routines';
import CreateRoutine from './pages/CreateRoutine';
import PATHS from './routes/paths';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.ROUTINES} element={<Routines />} />
        <Route path={PATHS.ROUTINES_CREATE} element={<CreateRoutine />} />
        {/* Add more routes here as you build other pages */}
      </Routes>
    </Router>
  );
}

export default App;