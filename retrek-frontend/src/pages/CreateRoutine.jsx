import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import ExerciseItem from '../components/features/ExerciseItem';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Search } from 'lucide-react';
import PATHS from '../routes/paths';

// Dummy exercise data (will be replaced with API call later)
const POPULAR_EXERCISES = [
  { id: 1, name: 'Bench Press (Barbell)', type: 'Barbell' },
  { id: 2, name: 'Bench Press (Dumbbell)', type: 'Dumbbell' },
  { id: 3, name: 'Bench Press (Dumbbell)', type: 'Dumbbell' },
  { id: 4, name: 'Bent Over Row (Barbell)', type: 'Barbell' },
  { id: 5, name: 'Bicep Curl (Dumbbell)', type: 'Dumbbell' },
  { id: 6, name: 'Squat (Barbell)', type: 'Barbell' },
  { id: 7, name: 'Deadlift (Barbell)', type: 'Barbell' },
  { id: 8, name: 'Shoulder Press (Dumbbell)', type: 'Dumbbell' },
];

export default function CreateRoutine() {
  const navigate = useNavigate();
  const [routineName, setRoutineName] = useState('');
  const [notes, setNotes] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedExercises, setAddedExercises] = useState([]);

  const handleAddExercise = (exercise) => {
    if (!addedExercises.find(ex => ex.id === exercise.id)) {
      setAddedExercises([...addedExercises, exercise]);
    }
  };

  const handleRemoveExercise = (exercise) => {
    setAddedExercises(addedExercises.filter(ex => ex.id !== exercise.id));
  };

  const handleSaveRoutine = () => {
    if (!routineName.trim()) {
      alert('Please enter a routine name');
      return;
    }

    if (addedExercises.length === 0) {
      alert('Please add at least one exercise');
      return;
    }

    // Here you'll make API call to save the routine
    const newRoutine = {
      id: Date.now(),
      name: routineName,
      notes: notes,
      exercises: addedExercises,
    };

    console.log('Saving routine:', newRoutine);
    
    // Redirect back to routines page
    navigate('/routines', { state: { newRoutine } });
  };

  const filteredExercises = POPULAR_EXERCISES.filter(exercise =>
    exercise.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto p-8">
        {/* Header with Save Button */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">New Routine</h1>
          <Button
            onClick={handleSaveRoutine}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2"
          >
            Save Routine
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Routine Details */}
          <div className="space-y-6">
            {/* Routine Name Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Routine Name
              </label>
              <Input
                type="text"
                placeholder="Routine"
                value={routineName}
                onChange={(e) => setRoutineName(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Notes Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notes (Optional)
              </label>
              <Input
                type="text"
                placeholder="Notes (Optional)"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Added Exercises Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Exercises added to Template
              </h2>
              
              {addedExercises.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                  <p className="text-gray-500">No exercises added yet</p>
                  <p className="text-sm text-gray-400 mt-2">Add exercises from the right panel</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {addedExercises.map((exercise) => (
                    <ExerciseItem
                      key={exercise.id}
                      exercise={exercise}
                      onRemove={handleRemoveExercise}
                      showRemove={true}
                      showDragHandle={true}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Exercise List */}
          <div>
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10"
              />
            </div>

            {/* Popular Exercises */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Popular Exercises
              </h2>
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                {filteredExercises.map((exercise) => (
                  <ExerciseItem
                    key={exercise.id}
                    exercise={exercise}
                    onAdd={handleAddExercise}
                    showRemove={false}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}