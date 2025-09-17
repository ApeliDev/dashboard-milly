import { AlertTriangle } from 'lucide-react';

interface AlertProps {
  type: 'error' | 'warning' | 'success';
  title: string;
  messages: string[];
}

const Alert = ({ type, title, messages }: AlertProps) => {
  const getAlertStyles = () => {
    switch (type) {
      case 'error':
        return 'bg-red-500 text-white';
      case 'warning':
        return 'bg-yellow-500 text-white';
      case 'success':
      default:
        return 'bg-green-500 text-white';
    }
  };

  return (
    <div className={`rounded-xl p-6 ${getAlertStyles()}`}>
      <div className="flex items-center space-x-2 mb-2">
        <AlertTriangle className="w-5 h-5" />
        <span className="font-semibold">{title}</span>
      </div>
      {messages.map((message, index) => (
        <p key={index} className="text-sm opacity-90">
          {message}
        </p>
      ))}
    </div>
  );
};

export default Alert;
