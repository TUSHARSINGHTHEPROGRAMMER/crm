import { useState } from 'react';
import PieChartComponent from './Components/PieChartComponent';
import BarChartComponent from './Components/BarChartComponent';
import LineChartComponent from './Components/LineChartComponent';
import TimeSelector from './Components/TimeSelector';
import Tabs from './Components/Tabs';
import AreaChartComponent from './Components/AreaChartComponent';

// Dummy data
const dayData = [
  { name: 'Electronics', value: 500 },
  { name: 'Fashion', value: 300 },
  { name: 'Home Appliances', value: 200 },
  { name: 'Books', value: 150 },
  { name: 'Sports', value: 100 },
];

const weekData = [
  { name: 'Electronics', value: 2000 },
  { name: 'Fashion', value: 1800 },
  { name: 'Home Appliances', value: 1500 },
  { name: 'Books', value: 1000 },
  { name: 'Sports', value: 800 },
];

const monthData = [
  { name: 'Electronics', value: 8000 },
  { name: 'Fashion', value: 7000 },
  { name: 'Home Appliances', value: 6000 },
  { name: 'Books', value: 5000 },
  { name: 'Sports', value: 4000 },
];

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('1day'); // Default to 1 day
  const [activeTab, setActiveTab] = useState('pie'); // Default tab

  // Function to get filtered data based on time range
  const getFilteredData = (data) => {
    switch (timeRange) {
      case '1day':
        return data.dayData;
      case '1week':
        return data.weekData;
      case '1month':
        return data.monthData;
      default:
        return data.dayData;
    }
  };

  // Tabs configuration
  const tabs = [
    { value: 'pie', label: 'Pie Chart' },
    { value: 'bar', label: 'Bar Chart' },
    { value: 'line', label: 'Line Chart' },
    { value: 'area', label: 'Area Chart' },
  ];

  return (
    <>
    <h1 className='font-bold text-5xl font-mono text-center mt-2 mb-4'> CRM STATS DASHBOARD</h1>
    <div className="p-8 bg-gray-100 min-h-screen">

      
      {/* Time Selector */}
      <TimeSelector onFilter={setTimeRange} />

      {/* Tabs */}
      <Tabs tabs={tabs} onTabChange={setActiveTab} />

      {/* Render Chart based on active tab */}
      <div className="mt-8">
        {activeTab === 'pie' && <PieChartComponent data={getFilteredData({ dayData, weekData, monthData })} />}
        {activeTab === 'bar' && <BarChartComponent data={getFilteredData({ dayData, weekData, monthData })} />}
        {activeTab === 'line' && <LineChartComponent data={getFilteredData({ dayData, weekData, monthData })} />}
        {activeTab === 'area' && <AreaChartComponent data={getFilteredData({ dayData, weekData, monthData })}/>}
      </div>
    </div>
    </>
  );
};

export default Dashboard;
