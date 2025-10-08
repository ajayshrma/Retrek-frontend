import MainLayout from '../components/layout/MainLayout';
import WorkoutCard from '../components/features/WorkoutCard';
import RoutineCard from '../components/features/RoutineCard';

export default function Home() {
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto p-12">
        {/* Welcome Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-12">
          Welcome back, <span className="text-gray-800">[Username]</span>!
        </h1>

        {/* Action Cards */}
        <div className="flex gap-6">
          <WorkoutCard />
          <RoutineCard />
        </div>
      </div>
    </MainLayout>
  );
}