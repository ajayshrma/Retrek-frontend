import { Button } from '../ui/button';
import { Plus, Minus, GripVertical } from 'lucide-react';

export default function ExerciseItem({ exercise, onAdd, onRemove, showRemove = false, showDragHandle = false }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
      <div className="flex items-center gap-3">
        {showDragHandle && (
          <GripVertical size={20} className="text-gray-400 cursor-move" />
        )}
        <div>
          <p className="text-gray-700 font-medium">{exercise.name}</p>
          {exercise.type && (
            <p className="text-sm text-gray-500">{exercise.type}</p>
          )}
        </div>
      </div>

      {showRemove ? (
        <Button
          onClick={() => onRemove(exercise)}
          size="icon"
          className="bg-red-500 hover:bg-red-600 text-white rounded-full h-8 w-8"
        >
          <Minus size={18} />
        </Button>
      ) : (
        <Button
          onClick={() => onAdd(exercise)}
          size="icon"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full h-8 w-8"
        >
          <Plus size={18} />
        </Button>
      )}
    </div>
  );
}