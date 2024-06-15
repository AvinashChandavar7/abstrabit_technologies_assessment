import React, { useState, ChangeEvent } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, LegendProps } from 'recharts';

interface DataItem {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

interface LegendContentProps {
  payload?: LegendProps['payload'];
}


interface CustomLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  index: number;
  selectedMetric: keyof DataItem;
}

const data: DataItem[] = [
  { name: 'Bajaj Finserv', value: 25000, percentage: 25, color: "#6C63FF" },
  { name: 'Shriram Finance', value: 20000, percentage: 20, color: "#FA9D17" },
  { name: 'Mahindra Finance', value: 15000, percentage: 15, color: "#B9C606" },
  { name: 'Utkarsh Small Finance Bank', value: 40000, percentage: 40, color: "#59CBD3" },
];

const FDPortfolio: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<keyof DataItem>('value');

  const handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMetric(event.target.value as keyof DataItem);
  };

  const renderLegend: React.FC<LegendContentProps> = ({ payload }) => {
    return (
      <ul className='mr-5'>
        {payload?.map((entry, index) => (
          <li key={`item-${index}`} className="flex items-center gap-2 mb-2">
            <div style={{ backgroundColor: entry.color }} className="inline-block w-3 h-3 rounded-full"></div>
            <span>{entry.value}</span>
          </li>
        ))}
      </ul>
    );
  };

  const renderCustomizedLabel = React.useCallback(
    ({ cx, cy, midAngle, innerRadius, outerRadius, index }: CustomLabelProps) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
      const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

      return (
        <text
          x={x}
          y={y}
          fill="#ffffff"
          textAnchor="middle"
          dominantBaseline="central"
          className="text-sm font-semibold text-center text-balance"
        >
          {`${data[index][selectedMetric]} (${data[index].percentage}%)`}
        </text>
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedMetric, data]
  );

  return (
    <div className="w-full p-4 border shadow-md">

      <div className="flex items-center justify-between gap-2">
        <h1 className="text-2xl font-bold">Your FD Portfolio</h1>
        <div className="p-4">
          <select
            id="metrics"
            value={selectedMetric}
            onChange={handleDropdownChange}
            className="px-4 py-2 border border-gray-300 rounded"
          >
            <option value="value">Deposit Amt</option>
            <option value="percentage">Percentage</option>
          </select>
        </div>
      </div>

      <PieChart width={550} height={300}>
        <Pie
          data={data}
          dataKey={selectedMetric}
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={140}
          fill="#8884d8"
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>

        <Tooltip />

        <Legend
          content={renderLegend}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </div>
  );
};

export default FDPortfolio;