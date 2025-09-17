import { BarChart3, FileText, AlertTriangle, Settings } from 'lucide-react';

const Sidebar = () => (
  <div className="w-60 bg-green-800 text-white">
    <div className="p-6">
      <div className="flex items-center space-x-2 mb-8">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <div className="w-6 h-6 bg-green-800 rounded-full relative">
            <div className="absolute top-0 left-1 w-2 h-3 bg-white rounded-sm"></div>
            <div className="absolute bottom-1 right-1 w-3 h-2 bg-white rounded-sm"></div>
          </div>
        </div>
        <span className="text-xl font-bold">BioPima</span>
      </div>
      
      <nav className="space-y-2">
        <div className="flex items-center space-x-3 p-3 bg-white bg-opacity-20 rounded-lg text-black">
          <BarChart3 size={20} />
          <span>Dashboard</span>
        </div>
        <div className="flex items-center space-x-3 p-3 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-pointer">
          <FileText size={20} />
          <span>Reports</span>
        </div>
        <div className="flex items-center space-x-3 p-3 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-pointer">
          <AlertTriangle size={20} />
          <span>Alerts</span>
        </div>
        <div className="flex items-center space-x-3 p-3 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-pointer">
          <Settings size={20} />
          <span>Settings</span>
        </div>
      </nav>
    </div>
  </div>
);

export default Sidebar;
