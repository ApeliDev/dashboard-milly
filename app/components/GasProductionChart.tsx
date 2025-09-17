interface DataPoint {
  x: number;
  y: number;
}

interface LineData {
  id: string;
  data: DataPoint[];
  color: string;
  label: string;
}

interface GasProductionChartProps {
  title: string;
  lines: LineData[];
  xAxisLabels: string[];
  yAxisLabels: string[];
}

export const GasProductionChart = ({ 
  title, 
  lines, 
  xAxisLabels, 
  yAxisLabels 
}: GasProductionChartProps) => {
  const maxY = Math.max(...lines.flatMap(line => line.data.map(point => point.y)));
  const scaleY = (value: number) => 250 - (value / maxY) * 200;
  const scaleX = (index: number) => 71 + (index * (684 / (lines[0]?.data.length - 1) || 1));

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">{title}</h3>
      
      <div className="relative h-80">
        <svg className="w-full h-full" viewBox="0 0 800 300">
          <defs>
            <pattern id="grid" width="114" height="50" patternUnits="userSpaceOnUse">
              <path d="M 114 0 L 0 0 0 50" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {yAxisLabels.map((label, index) => (
            <text 
              key={`y-${index}`}
              x="30" 
              y={50 + (index * 50)} 
              textAnchor="middle" 
              className="text-sm fill-gray-600"
            >
              {label}
            </text>
          ))}

          {lines.map((line) => (
            <g key={line.id}>
              <polyline
                fill="none"
                stroke={line.color}
                strokeWidth="3"
                points={line.data.map((point, i) => 
                  `${scaleX(i)},${scaleY(point.y)}`
                ).join(' ')}
              />
              {line.data.map((point, i) => (
                <circle 
                  key={`${line.id}-point-${i}`}
                  cx={scaleX(i)} 
                  cy={scaleY(point.y)} 
                  r="4" 
                  fill={line.color} 
                />
              ))}
            </g>
          ))}

          {xAxisLabels.map((label, index) => (
            <text 
              key={`x-${index}`}
              x={scaleX(index)} 
              y="285" 
              textAnchor="middle" 
              className="text-sm fill-gray-600"
            >
              {label}
            </text>
          ))}
        </svg>
      </div>

      <div className="flex justify-center space-x-8 mt-4">
        {lines.map((line) => (
          <div key={`legend-${line.id}`} className="flex items-center space-x-2">
            <div className={`w-4 h-1 ${line.color} rounded`}></div>
            <span className="text-sm font-medium text-gray-600">{line.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GasProductionChart;
