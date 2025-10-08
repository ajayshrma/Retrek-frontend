import { Home, Calendar, FileText, LogOut, ChevronRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback } from '../ui/avatar';
import PATHS from '../../routes/paths';

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="w-72 bg-white shadow-lg flex flex-col h-screen">
      {/* Logo Section */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">R</span>
          </div>
          <span className="text-2xl font-bold text-gray-800">Retrek</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className={`w-full justify-start gap-3 ${
              location.pathname === '/' 
                ? 'bg-blue-100 text-blue-600 hover:bg-blue-100 hover:text-blue-600' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Home size={20} />
            <span>Home</span>
          </Button>

          <Button
            onClick={() => navigate('/routines')}
            variant="ghost"
            className={`w-full justify-start gap-3 ${
              location.pathname.includes('/routines') 
                ? 'bg-blue-100 text-blue-600 hover:bg-blue-100 hover:text-blue-600' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Calendar size={20} />
            <span>Routines</span>
          </Button>

          <Button
            onClick={() => navigate('/reports')}
            variant="ghost"
            className={`w-full justify-start gap-3 ${
              location.pathname === '/reports' 
                ? 'bg-blue-100 text-blue-600 hover:bg-blue-100 hover:text-blue-600' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <FileText size={20} />
            <span>Reports</span>
          </Button>

          <Button
            onClick={() => alert('Logout clicked')}
            variant="ghost"
            className="w-full justify-start gap-3 text-gray-600 hover:bg-gray-100"
          >
            <LogOut size={20} />
            <span>Loegout</span>
          </Button>
        </div>
      </nav>

      {/* Bottom Section - PRO & Profile */}
      <div className="p-4 border-t">
        {/* PRO Section */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-600 mb-2">
            Retret <span className="text-blue-500 font-semibold">PRO</span>
          </p>
          <Button className="w-full bg-blue-500 hover:bg-blue-600">
            Unlock
          </Button>
        </div>

        {/* User Profile */}
        <Button
          variant="ghost"
          className="w-full justify-between px-4 py-3 h-auto hover:bg-gray-100"
        >
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-gray-300 text-gray-600">
                SS
              </AvatarFallback>
            </Avatar>
            <span className="text-gray-700 font-medium">selfskyway</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </Button>
      </div>
    </div>
  );
}