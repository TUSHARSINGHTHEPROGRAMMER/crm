import PropTypes from 'prop-types';

const TimeSelector = ({ onFilter }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    onFilter(value);
  };

  return (
    <div className="flex justify-center items-center mb-4">
      <label className="mr-4 text-gray-700 font-semibold">Time Range:</label>
      <select
        onChange={handleChange}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
      >
        <option value="1day">1 Day</option>
        <option value="1week">1 Week</option>
        <option value="1month">1 Month</option>
      </select>
    </div>
  );
};

TimeSelector.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default TimeSelector;
