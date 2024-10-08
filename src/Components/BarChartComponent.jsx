import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend ,ResponsiveContainer} from 'recharts';
import PropTypes from 'prop-types';

const BarChartComponent = ({ data }) => (
  <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md">
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4 text-center">Product Sales</h2>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#6366F1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

BarChartComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BarChartComponent;
