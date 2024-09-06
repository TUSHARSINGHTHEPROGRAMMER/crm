import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import PropTypes from 'prop-types';

const LineChartComponent = ({ data }) => (
  <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md">
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">Sales Over Time</h2>
      <LineChart width={600} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#4F46E5" strokeWidth={2} />
      </LineChart>
    </div>
  </div>
);

LineChartComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default LineChartComponent;
