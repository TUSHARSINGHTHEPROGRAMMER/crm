import PropTypes from 'prop-types';

const Card = ({ title, value, icon }) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex items-center">
    <div className="flex-shrink-0">
      {icon}
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  icon: PropTypes.node.isRequired,
};

export default Card;
