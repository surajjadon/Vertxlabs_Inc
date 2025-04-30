import { NavLink } from 'react-router-dom';

const BottomNavbar = () => {
  const menuItems = [
    { name: "Dashboard", icon: "fas fa-home", path: "/" },
    { name: "Analytics", icon: "fas fa-chart-line", path: "/analytics" },
    { name: "Connect", icon: "fas fa-globe", path: "/connect" },
    { name: "Activity", icon: "fas fa-bell", path: "/activity" },
    { name: "Dealroom", icon: "fas fa-project-diagram", path: "/dealroom" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-700 flex justify-around items-center h-16 z-50">
      {menuItems.map((item) => (
        <NavLink
          to={item.path}
          key={item.name}
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? 'text-blue-400' : 'text-white'
            } hover:text-gray-300`
          }
        >
          <i className={`${item.icon} text-lg`}></i>
          <span className="text-[10px] mt-1">{item.name}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default BottomNavbar;
