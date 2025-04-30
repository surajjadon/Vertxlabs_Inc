import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import BottomNavbar from './Components/Sidebar/BottomNavbar';
import Navbar from './Components/Navbar';
import MainContent from './Components/MainContent';
import Logoc from './Components/Logoc';
import User from './Components/User';
import AdminPannel from './Components/AdminPannel';
import AddUserButton from './Components/AddUserButton';
import Overview from './Components/Overview';
import MobileTopbar from './Components/Sidebar/MobileTopbar';

function Layout({ users, addUser }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="md:hidden">
        <MobileTopbar users={users} />
      </div>

      <div className="hidden md:grid grid-cols-[0.1fr_0.2fr_3fr] divide-x divide-gray-900">
        <div className="flex flex-col divide-y divide-gray-900 bg-black">
          <div className="h-[5%]">
            <Logoc />
          </div>
          <div className="flex justify-between flex-col divide-y divide-gray-900 h-[95%]">
            <div className="h-[85%]">
              <User users={users} />
            </div>
            <div className="h-[65%]">
              <AddUserButton addUser={addUser} />
            </div>
          </div>
        </div>
        <div className="flex flex-col divide-y divide-gray-900">
          <div className="h-[5%] flex-shrink-0">
            <AdminPannel />
          </div>
          <div className="h-[95%]">
            <Sidebar />
          </div>
        </div>
        <div className="flex flex-col divide-y divide-gray-900 overflow-hidden">
          
          <div className="flex flex-row bg-black px-2 md:px-4 h-[5%] divide-x divide-gray-900 font-medium items-stretch">
            <Link
              to="/analytics"
              className="w-[70%] md:w-[82%] p-2 md:p-4 flex items-center hover:text-gray-300 text-xs md:text-base lg:text-lg"
            >
              <Navbar />
            </Link>
            <Link
              to="/activity"
              className="w-[15%] md:w-[10%] px-4 md:px-8 flex items-center justify-center hover:text-gray-300 text-xs md:text-base lg:text-lg"
            >
              Activity
            </Link>
            <Link
              to="/logout"
              className="w-[15%] md:w-[8%] px-4 md:px-8 flex items-center justify-center hover:text-gray-300 text-xs md:text-base lg:text-lg"
            >
              Logout
            </Link>
          </div>

          {/* Second Bar */}
          <div className="flex flex-row bg-black px-2 md:px-4 h-[5%] divide-x divide-gray-900 font-medium items-stretch">
            <Link
              to="/analytics"
              className={`w-[20%] md:w-[20%] sm:w-[25%] lg:w-[10%] p-2 md:p-4 flex items-center ${
                location.pathname === '/analytics' ? 'text-white' : 'text-gray-500'
              } hover:text-gray-300 text-xs md:text-base lg:text-lg`}
            >
              Overview
            </Link>

            <Link
              to="/demographics"
              className={`w-[35%] md:w-[25%] sm:w-[45%] lg:w-[15%] py-2 md:py-4 px-4 md:px-8 flex items-center ${
                location.pathname === '/demographics' ? 'text-white' : 'text-gray-500'
              } hover:text-gray-300 text-xs md:text-base lg:text-lg`}
            >
              Demographics
            </Link>

            <Link
              to="#"
              className="w-[35%] md:w-[37%] sm:w-[5%] lg:w-[70%] py-2 md:py-4 px-4 md:px-8 flex items-center text-gray-500 hover:text-gray-300 text-xs md:text-base lg:text-lg"
            >
            </Link>

            <Link
              to="/more"
              className="w-[10%] md:w-[6%] lg:w-[8%] px-4 md:px-8 py-2 md:py-4 flex items-center hover:text-gray-300 text-xs md:text-base lg:text-lg"
            >
              More
            </Link>
          </div>

          <div className="flex-1 overflow-auto p-4">
<Routes>
  <Route path="*" element={<Navigate to="/analytics" replace />} />
  <Route path="/analytics" element={<Overview />} />
</Routes>

          </div>
        </div>
      </div>
      <div className="md:hidden p-4">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/analytics" element={<Overview />} />
          <Route path="/demographics" element={<div>Demographics Content</div>} />
          <Route path="/activity" element={<div>Activity Content</div>} />
          <Route path="/logout" element={<div>Logout Page</div>} />
          <Route path="/more" element={<div>More Content</div>} />
        </Routes>
      </div>

      <div className="md:hidden">
        <BottomNavbar />
      </div>
    </div>
  );
}

export default Layout;
