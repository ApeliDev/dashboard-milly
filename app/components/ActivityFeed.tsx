interface ActivityItemProps {
  id: string;
  type: 'temperature' | 'leak' | 'system';
  title: string;
  time: string;
  description: string;
  icon: React.ReactNode;
}

interface ActivityFeedProps {
  activities: ActivityItemProps[];
}

const ActivityItem = ({ type, title, time, description, icon }: ActivityItemProps) => {
  const getStatusColor = () => {
    switch (type) {
      case 'temperature':
        return 'bg-yellow-500';
      case 'leak':
        return 'bg-red-500';
      case 'system':
      default:
        return 'bg-green-500';
    }
  };

  return (
    <div className="flex items-start space-x-3">
      <div className={`w-2 h-2 ${getStatusColor()} rounded-full mt-2`}></div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {icon}
            <span className="text-sm font-medium">{title}</span>
          </div>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
};

const ActivityFeed = ({ activities }: ActivityFeedProps) => {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <ActivityItem key={activity.id} {...activity} />
      ))}
    </div>
  );
};

export default ActivityFeed;
