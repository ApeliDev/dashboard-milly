import { AlertTriangle, Activity } from 'lucide-react';

interface SystemStatusProps {
  status: 'operational' | 'warning' | 'error';
  message: string;
  subMessage?: string;
  statusText: string;
  icon?: React.ReactNode;
}

export const SystemStatus = ({
  status,
  message,
  subMessage,
  statusText,
  icon
}: SystemStatusProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'warning':
        return 'bg-yellow-100 text-yellow-700';
      case 'error':
        return 'bg-red-100 text-red-700';
      case 'operational':
      default:
        return 'bg-green-100 text-green-700';
    }
  };

  const getStatusIcon = () => {
    if (icon) return icon;
    
    switch (status) {
      case 'warning':
        return <AlertTriangle className="w-5 h-5" />;
      case 'error':
        return <AlertTriangle className="w-5 h-5" />;
      case 'operational':
      default:
        return <Activity className="w-5 h-5" />;
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-700">System Status</h3>
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor()} flex items-center`}>
          {getStatusIcon()}
          <span className="ml-1">{statusText}</span>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-2">{message}</p>
      {subMessage && (
        <div className="flex items-center space-x-2 mt-2">
          <Activity className="w-4 h-4 text-green-600" />
          <span className="text-xs text-gray-500">{subMessage}</span>
        </div>
      )}
    </div>
  );
};

export default SystemStatus;
