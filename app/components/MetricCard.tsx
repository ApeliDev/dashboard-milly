import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  borderColor?: string;
  iconBgColor?: string;
  iconColor?: string;
}

const MetricCard = ({
  title,
  value,
  description,
  icon: Icon,
  borderColor = 'border-green-200',
  iconBgColor = 'bg-gray-100',
  iconColor = 'text-gray-600',
}: MetricCardProps) => (
  <div className={`bg-white rounded-xl p-6 shadow-sm border ${borderColor}`}>
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <div className="text-2xl font-bold text-gray-800">{value}</div>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className={`w-10 h-10 ${iconBgColor} rounded-full flex items-center justify-center`}>
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
    </div>
  </div>
);

export default MetricCard;
