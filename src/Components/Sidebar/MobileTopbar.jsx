import MobileLogo from '../Images/MobileLogo.png';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const MobileTopbar = ({ users }) => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('overview');
  
  const isActive = (path) => {
    return activeTab === path || location.pathname.includes(path);
  };

  return (
    <div className="bg-black text-white">
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div>
          {users && users.length > 0 && (
            <img
              src={users[0].image}
              alt="User"
              className="w-10 h-10 rounded-full"
            />
          )}
        </div>
        
        <Link to="/home">
          <img src={MobileLogo} alt="Logo" className="w-8 h-8" />
        </Link>

        <button className="text-white">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="5" cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
          </svg>
        </button>
      </div>

      <div className="flex items-center justify-around border-b border-gray-800 text-sm font-medium">
        <Link 
          to="/analytics" 
          className={`flex-1 py-4 text-center ${isActive('overview') 
            ? 'text-white border-b-2 border-white' 
            : 'text-gray-500'}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </Link>
        <Link 
          to="/reports" 
          className={`flex-1 py-4 text-center ${isActive('reports') 
            ? 'text-white border-b-2 border-white' 
            : 'text-gray-500'}`}
          onClick={() => setActiveTab('reports')}
        >
          Reports
        </Link>
        <Link 
          to="/demographics" 
          className={`flex-1 py-4 text-center ${isActive('demographics') 
            ? 'text-white border-b-2 border-white' 
            : 'text-gray-500'}`}
          onClick={() => setActiveTab('demographics')}
        >
          Demographics
        </Link>
      </div>
    </div>
  );
};

export default MobileTopbar;
