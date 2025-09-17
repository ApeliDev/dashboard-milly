import React from 'react';
import { Bell, User, Activity, Thermometer, Gauge, AlertTriangle } from 'lucide-react';
import { 
  Sidebar, 
  Header, 
  MetricCard, 
  ActivityFeed, 
  Alert, 
  GasProductionChart, 
  SystemStatus 
} from './components';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <Header />

        {/* Content */}
        <div className="p-6">
          {/* Top Row Cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Methane Card */}
            <MetricCard
              title="Methane"
              value="3.02ppm"
              description="Available methane level"
              icon={Activity}
              borderColor="border-green-200"
              iconBgColor="bg-gray-100"
              iconColor="text-gray-600"
            />

            {/* Temperature Card */}
            <MetricCard
              title="Temperature"
              value="34.61°C"
              description="Digester core temperature"
              icon={Thermometer}
              borderColor="border-red-200"
              iconBgColor="bg-red-100"
              iconColor="text-red-600"
            />

            {/* Pressure Card */}
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
                <div className="bg-green-100 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-700">System Status</h3>
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <p className="text-sm text-gray-600 mb-2">All systems operational</p>
                  <div className="text-red-500 font-semibold">Warning</div>
                </div>

                <div className="bg-green-100 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm text-gray-600">
                      Automatically monitoring pressure, temperature, & volume.
                    </div>
                    <div className="w-12 h-8 bg-green-700 rounded flex items-center justify-center">
                      <Activity className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Gas Production Chart */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Gas Production & Consumption</h3>
                
                <div className="relative h-80">
                  <svg className="w-full h-full" viewBox="0 0 800 300">
                    {/* Grid lines */}
                    <defs>
                      <pattern id="grid" width="114" height="50" patternUnits="userSpaceOnUse">
                        <path d="M 114 0 L 0 0 0 50" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    
                    {/* Y-axis labels */}
                    <text x="30" y="50" textAnchor="middle" className="text-sm fill-gray-600">10000</text>
                    <text x="30" y="100" textAnchor="middle" className="text-sm fill-gray-600">7500</text>
                    <text x="30" y="150" textAnchor="middle" className="text-sm fill-gray-600">5000</text>
                    <text x="30" y="200" textAnchor="middle" className="text-sm fill-gray-600">2500</text>
                    <text x="30" y="250" textAnchor="middle" className="text-sm fill-gray-600">0</text>

                    {/* Production line (yellow-green) */}
                    <polyline
                      fill="none"
                      stroke="#84cc16"
                      strokeWidth="3"
                      points="71,200 185,230 299,50 413,150 527,130 641,140 755,150"
                    />
                    
                    {/* Consumption line (dark green) */}
                    <polyline
                      fill="none"
                      stroke="#166534"
                      strokeWidth="3"
                      points="71,170 185,190 299,210 413,200 527,220 641,200 755,180"
                    />

                    {/* Data points */}
                    {/* Production points */}
                    <circle cx="71" cy="200" r="4" fill="#84cc16" />
                    <circle cx="185" cy="230" r="4" fill="#84cc16" />
                    <circle cx="299" cy="50" r="4" fill="#84cc16" />
                    <circle cx="413" cy="150" r="4" fill="#84cc16" />
                    <circle cx="527" cy="130" r="4" fill="#84cc16" />
                    <circle cx="641" cy="140" r="4" fill="#84cc16" />
                    <circle cx="755" cy="150" r="4" fill="#84cc16" />

                    {/* Consumption points */}
                    <circle cx="71" cy="170" r="4" fill="#166534" />
                    <circle cx="185" cy="190" r="4" fill="#166534" />
                    <circle cx="299" cy="210" r="4" fill="#166534" />
                    <circle cx="413" cy="200" r="4" fill="#166534" />
                    <circle cx="527" cy="220" r="4" fill="#166534" />
                    <circle cx="641" cy="200" r="4" fill="#166534" />
                    <circle cx="755" cy="180" r="4" fill="#166534" />

                    {/* X-axis labels */}
                    <text x="71" y="285" textAnchor="middle" className="text-sm fill-gray-600">Mon</text>
                    <text x="185" y="285" textAnchor="middle" className="text-sm fill-gray-600">Tue</text>
                    <text x="299" y="285" textAnchor="middle" className="text-sm fill-gray-600">Wed</text>
                    <text x="413" y="285" textAnchor="middle" className="text-sm fill-gray-600">Thu</text>
                    <text x="527" y="285" textAnchor="middle" className="text-sm fill-gray-600">Fri</text>
                    <text x="641" y="285" textAnchor="middle" className="text-sm fill-gray-600">Sat</text>
                    <text x="755" y="285" textAnchor="middle" className="text-sm fill-gray-600">Sun</text>
                  </svg>
                </div>

                <div className="flex justify-center space-x-8 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-1 bg-yellow-500 rounded"></div>
                    <span className="text-sm font-medium text-gray-600">production</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-1 bg-green-800 rounded"></div>
                    <span className="text-sm font-medium text-gray-600">consumption</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Activity Feed */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Activity Feed</h3>
                <p className="text-sm text-gray-500 mb-6">Recent system events and alerts.</p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Thermometer className="w-4 h-4" />
                          <span className="text-sm font-medium">Temp Warning</span>
                        </div>
                        <span className="text-xs text-gray-500">less than a minute ago</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Low Temperature Warning: Digester temperature at 34.6C.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4" />
                          <span className="text-sm font-medium">Leak Warning</span>
                        </div>
                        <span className="text-xs text-gray-500">less than a minute ago</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Leak Warning: Pressure at 1.02 bar (15.0% drop).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Temperature Alert */}
              <div className="bg-red-500 text-white rounded-xl p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="w-5 h-5" />
                  <span className="font-semibold">Temperature Alert</span>
                </div>
                <p className="text-sm opacity-90">Low Temperature Warning:</p>
                <p className="text-sm opacity-90">Digester temperature at 34.6°C.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;