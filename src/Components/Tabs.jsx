import  { useState } from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  const handleTabClick = (value) => {
    setActiveTab(value);
    onTabChange(value);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`px-4 py-2 mx-2 rounded-t-lg ${
              activeTab === tab.value ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => handleTabClick(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onTabChange: PropTypes.func.isRequired,
};

export default Tabs;
