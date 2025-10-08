import Sidebar from './Sidebar';
import { Button } from '../ui/button';

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>

      {/* Feedback Button */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2">
        {/* <Button
          variant="outline"
          className="bg-white text-gray-600 px-3 py-6 rounded-l-lg shadow-lg text-sm font-medium hover:bg-gray-50 rounded-r-none"
        >
          Feedback
        </Button> */}
      </div>
    </div>
  );
}