
import { PieChart, Pie, Tooltip, Cell ,ResponsiveContainer} from 'recharts';
import PropTypes from 'prop-types';

const COLORS = ['#82ca9d', '#8884d8', '#FF8042', '#FFBB28','#DA2129']; // Example colors

const PieChartComponent = ({ data }) => (
  <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md">
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4 text-center">Product Distribution</h2>
      <div style={{ width: '100%', height: 450 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius="80%"
              innerRadius="0%"
              fill="#82ca9d"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
  );


PieChartComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PieChartComponent;
