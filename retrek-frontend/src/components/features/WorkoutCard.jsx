import { ClipboardList } from 'lucide-react';
import { Card } from '../ui/card';

export default function WorkoutCard() {
  return (
    <Card className="flex-1 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl p-8 shadow-lg transition-all hover:shadow-xl cursor-pointer border-0">
      <div className="flex items-center gap-4">
        <div className="bg-white bg-opacity-20 p-4 rounded-xl">
          <ClipboardList size={32} />
        </div>
        <span className="text-2xl font-semibold">Log Today's Workout</span>
      </div>
    </Card>
  );
}