
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import PropTypes from 'prop-types';

const PieChartComponent = ({ data }) => {

  const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF9F40'];

  return (
    <div className="flex justify-center items-center p-8 bg-white rounded-lg shadow-lg">
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-center">Revenue Breakdown</h2>
        <PieChart width={450} height={450}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            innerRadius={70}
            fill="#82ca9d"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

PieChartComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default PieChartComponent;
