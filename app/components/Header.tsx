import { Bell, User } from 'lucide-react';

const Header = () => (
  <div className="bg-white shadow-sm p-6 flex justify-between items-center">
    <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
    <div className="flex items-center space-x-4">
      <div className="relative">
        <Bell className="w-6 h-6 text-gray-600" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full"></div>
      </div>
      <div className="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center">
        <User className="w-5 h-5 text-white" />
      </div>
    </div>
  </div>
);

export default Header;
