import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ClipboardList, MoreVertical } from 'lucide-react';
import PATHS from '../routes/paths';

export default function Routines() {
  const navigate = useNavigate();
  const location = useLocation();
  const [routines, setRoutines] = useState(() => {
    // Load routines from memory
    const saved = sessionStorage.getItem('routines');
    return saved ? JSON.parse(saved) : [];
  });

  // Check if a new routine was passed from CreateRoutine page
  useEffect(() => {
    if (location.state?.newRoutine) {
      const updatedRoutines = [...routines, location.state.newRoutine];
      setRoutines(updatedRoutines);
      sessionStorage.setItem('routines', JSON.stringify(updatedRoutines));
      // Clear the state to prevent re-adding on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleNewRoutine = () => {
    navigate(PATHS.ROUTINES_CREATE);
  };

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">My Routines</h1>
          
          {/* New Routine Button */}
          <Button
            onClick={handleNewRoutine}
            variant="ghost"
            className="flex items-center gap-3 text-blue-500 hover:text-blue-600 hover:bg-blue-50 px-4 py-6 text-lg"
          >
            <ClipboardList size={24} />
            <span className="font-medium">New Routine</span>
          </Button>
        </div>

        {/* Routines List */}
        {routines.length === 0 ? (
          <div className="text-center py-20">
            <ClipboardList size={64} className="mx-auto text-blue-400 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Get started</h2>
            <p className="text-gray-500">Start by creating a routine!</p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              My Routines ({routines.length})
            </h2>
            <div className="space-y-4">
              {routines.map((routine) => (
                <Card
                  key={routine.id}
                  className="p-6 flex items-center justify-between hover:shadow-md transition-shadow cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-gray-800">{routine.name}</h3>
                  <Button variant="ghost" size="icon">
                    <MoreVertical size={20} className="text-gray-400" />
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}