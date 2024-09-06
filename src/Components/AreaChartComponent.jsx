import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PropTypes from 'prop-types';

const AreaChartComponent = ({ data }) => (
  <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md">
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">Sales Trend</h2>
      <AreaChart width={600} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="value" stroke="#4F46E5" fill="#4F46E5" fillOpacity={0.3} />
      </AreaChart>
    </div>
  </div>
);

AreaChartComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default AreaChartComponent;
