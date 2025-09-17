'use client';

import React from 'react';
import { Activity, Thermometer, Gauge, ThermometerIcon, AlertTriangle } from 'lucide-react';
import { 
  Sidebar, 
  Header, 
  MetricCard, 
  ActivityFeed, 
  Alert as AlertComponent, 
  GasProductionChart,
  SystemStatus
} from '../components';

const DashboardPage = () => {
  // Sample data for the chart
  const chartData = [
    {
      id: 'production',
      data: [
        { x: 0, y: 2000 },
        { x: 1, y: 4000 },
        { x: 2, y: 6000 },
        { x: 3, y: 3500 },
        { x: 4, y: 4500 },
        { x: 5, y: 5000 },
        { x: 6, y: 5500 },
      ],
      color: '#84cc16',
      label: 'production'
    },
    {
      id: 'consumption',
      data: [
        { x: 0, y: 1500 },
        { x: 1, y: 3000 },
        { x: 2, y: 4500 },
        { x: 3, y: 3500 },
        { x: 4, y: 4000 },
        { x: 5, y: 3000 },
        { x: 6, y: 3500 },
      ],
      color: '#166534',
      label: 'consumption'
    }
  ];

  const activities = [
    {
      id: '1',
      type: 'temperature' as const,
      title: 'Temp Warning',
      time: 'less than a minute ago',
      description: 'Low Temperature Warning: Digester temperature at 34.6C.',
      icon: <ThermometerIcon className="w-4 h-4" />
    },
    {
      id: '2',
      type: 'leak' as const,
      title: 'Leak Warning',
      time: '5 minutes ago',
      description: 'Pressure drop detected: Possible gas leak.',
      icon: <AlertTriangle className="w-4 h-4" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      <div className="flex-1">
        <Header />
        
        <div className="p-6">
          {/* Top Row Cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <MetricCard
              title="Methane"
              value="3.02ppm"
              description="Available methane level"
              icon={Activity}
              borderColor="border-green-200"
              iconBgColor="bg-gray-100"
              iconColor="text-gray-600"
            />
            
            <MetricCard
              title="Temperature"
              value="34.61°C"
              description="Digester core temperature"
              icon={Thermometer}
              borderColor="border-red-200"
              iconBgColor="bg-red-100"
              iconColor="text-red-600"
            />
            
            <MetricCard
              title="Pressure"
              value="1.19 kPa"
              description="Current digester pressure"
              icon={Gauge}
              borderColor="border-orange-200"
              iconBgColor="bg-orange-100"
              iconColor="text-orange-600"
            />
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="col-span-2 space-y-6">
              {/* System Status Cards */}
              <div className="grid grid-cols-2 gap-6">
                <SystemStatus
                  status="warning"
                  message="All systems operational"
                  statusText="Warning"
                />
                
                <SystemStatus
                  status="operational"
                  message="Automatically monitoring pressure, temperature, & volume."
                  statusText="Active"
                  icon={<Activity className="w-4 h-4" />}
                />
              </div>

              {/* Gas Production Chart */}
              <GasProductionChart 
                title="Gas Production & Consumption"
                lines={chartData}
                xAxisLabels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
                yAxisLabels={['10000', '7500', '5000', '2500', '0']}
              />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <ActivityFeed activities={activities} />
              
              <AlertComponent
                type="error"
                title="Temperature Alert"
                messages={[
                  'Low Temperature Warning:',
                  'Digester temperature at 34.6°C.'
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
